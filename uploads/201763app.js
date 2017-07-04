var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var menuData = require('./data/menu');
var formidable = require('formidable');
var bodyParser = require('body-parser');
var parseXlsx  = require('excel');

var resultHtml;
var PORT = process.env.PORT || 20000;

var cityCategoryArray = [];
var getCityName = function(engName){
	var nameArray = [
		{
			en : 'seoul',
			kor : '서울',
		},
		{
			en : 'kyungki',
			kor : '경기',
		},
		{
			en : 'incheon',
			kor : '인천',
		},
		{
			en : 'sejong',
			kor : '세종시',
		},
		{
			en : 'busan',
			kor : '부산',
		},
		{
			en : 'ulsan',
			kor : '울산',
		},
		{
			en : 'daegu',
			kor : '대구',
		},
		{
			en : 'kyungnam',
			kor : '경남',
		},
		{
			en : 'kyungbuk',
			kor : '경북',
		},
		{
			en : 'gwangju',
			kor : '광주',
		},
		{
			en : 'jeonnam',
			kor : '전남',
		},
		{
			en : 'jeonbuk',
			kor : '전북',
		},
		{
			en : 'chungnam',
			kor : '충남',
		},
		{
			en : 'chungbuk',
			kor : '충북',
		},
		{
			en : 'daejun',
			kor : '대전',
		},
		{
			en : 'kangwon',
			kor : '강원',
		},
		{
			en : 'jeju',
			kor : '제주',
		}
	];

	var nameObj = nameArray.filter(function(obj){
		return obj.en == engName;
	});

	return {
		en : nameObj[0].en,
		kor : nameObj[0].kor
	};
};

var handleAddress = function(data){
	var newJsonData = {
		title : [],
		contentObj : {}
	};

	var objNameArray = [
		'name',
		'address',
		'phone'
	];

	var count = 0;
	var colsCount =0;
	var rowsCount =0;

	for(; rowsCount < data.length; rowsCount++){
		for(; colsCount < data[rowsCount].length; colsCount++){
			/*
				If it is first sheet,
				First sheet should be title
			*/
			if(rowsCount == 0){
				newJsonData.title.push(data[rowsCount][colsCount]);
			}else{
				/* If more than first sheet */
				/* Set category */
				if(colsCount == 0){
					if(newJsonData.contentObj[data[rowsCount][0]] == undefined){
						newJsonData.contentObj[data[rowsCount][0]] = [];
						cityCategoryArray[count] = getCityName(data[rowsCount][0]);
						count++;
					}
				}else{
					/* Input data to category which it has own */
					if(colsCount == 1){
						newJsonData.contentObj[data[rowsCount][0]].push({});
					}

					newJsonData.contentObj[data[rowsCount][0]][newJsonData.contentObj[data[rowsCount][0]].length-1][objNameArray[colsCount-1]] = data[rowsCount][colsCount];
				}

			}
		}
		colsCount = 0;
	}

	return newJsonData;

};


var checkCategory = function(prefix , obj){
	var key;
	for(key in obj){
		if(key == prefix){
			return true;
		}
	}

	return false;
};

var getResultHtmlPath = function(name , secondParam , ctgrName){
	return './data/'+name+'/'+secondParam+'/'+ctgrName;
}

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended : false}));


app.get('/',function(req,res){
	res.redirect(menuData[Object.keys(menuData)[0]].path);
});


app.post('/handleExcel',function(req,res){
	parseXlsx(req.file_ipt, function(err, data) {
		if(err) throw err;
		res.send({
			result : true,
			msg : req.body.file,
			data : handleAddress(data),
			ctgrList : cityCategoryArray
		});
	});
});

app.post('/upload',function(req,res){
	var fileInfo;
	var form = new formidable.IncomingForm();

	form.uploadDir = path.join(__dirname , '/uploads');

	form.on('file', function(field, file) {
		fs.rename(file.path, path.join(form.uploadDir, (new Date().getFullYear()+''+new Date().getMonth()+''+new Date().getDate())+file.name));
		fileInfo = file;
	});

	form.on('error', function(err) {
		console.log('An error has occured: \n' + err);
	});

	form.on('end', function() {
		console.log(fileInfo);
		res.send({
			filePath : fileInfo.path,
			fileName : fileInfo.name
		});
    });

	form.parse(req);

});


app.get('/:menuId',function(req,res){
	var pageInfo = {
		allMenu : menuData
	};

	var isExistMenu = false,
		isExistCtgr = false;

	if(checkCategory(req.params.menuId , menuData)){
		isExistMenu = true;
		pageInfo.name = req.params.menuId;
	}else{
		pageInfo.name = false;
	}

	if(isExistMenu){
		pageInfo.allMenu = menuData;
		pageInfo.menuItems = menuData[pageInfo.name];

		pageInfo.secondParam = Object.keys(pageInfo.menuItems.menu)[0];
		pageInfo.secondName = pageInfo.menuItems.menu[pageInfo.secondParam].name;

		pageInfo.categoryParam = Object.keys(pageInfo.menuItems.menu[pageInfo.secondParam].menu)[0];
		pageInfo.categoryName = menuData[pageInfo.name].menu[pageInfo.secondParam].menu[pageInfo.categoryParam].name;


		resultHtml = require(getResultHtmlPath(pageInfo.name , pageInfo.secondParam , pageInfo.categoryParam));
		pageInfo.resultHtml = resultHtml;
	}

    res.render('index', pageInfo);
});

app.get('/:menuId/:categoryId',function(req,res){
	var pageInfo = {
		allMenu : menuData
	};

	var isExistMenu = false,
		isExistCtgr = false;

	if(checkCategory(req.params.menuId , menuData)){
		isExistMenu = true;
		pageInfo.name = req.params.menuId;
	}else{
		pageInfo.name = false;
	}

	if(checkCategory(req.params.categoryId , menuData[pageInfo.name].menu)){
		isExistCtgr = true;
		pageInfo.secondParam = req.params.categoryId;
		pageInfo.secondName = menuData[pageInfo.name].menu[pageInfo.secondParam].name;
	}else{
		pageInfo.secondParam = false;
	}

	if(isExistMenu && isExistCtgr){
		pageInfo.allMenu = menuData;
		pageInfo.menuItems = menuData[pageInfo.name];

		pageInfo.categoryParam = Object.keys(pageInfo.menuItems.menu[pageInfo.secondParam].menu)[0];
		pageInfo.categoryName = menuData[pageInfo.name].menu[pageInfo.secondParam].menu[pageInfo.categoryParam].name;

		resultHtml = require(getResultHtmlPath(pageInfo.name , pageInfo.secondParam , pageInfo.categoryParam));
		pageInfo.resultHtml = resultHtml;
	}

    res.render('index', pageInfo);
});


app.get('/:menuId/:categoryId/:convenId',function(req,res){
	var pageInfo = {
		allMenu : menuData
	};

	var isExistMenu = false,
		isExistCtgr = false,
		isExist = false;

	if(checkCategory(req.params.menuId , menuData)){
		isExistMenu = true;
		pageInfo.name = req.params.menuId;
	}else{
		pageInfo.name = false;
	}

	if(checkCategory(req.params.categoryId , menuData[pageInfo.name].menu)){
		isExistCtgr = true;
		pageInfo.secondParam = req.params.categoryId;
		pageInfo.secondName = menuData[pageInfo.name].menu[pageInfo.secondParam].name;
	}else{
		pageInfo.secondParam = false;
	}

	if(checkCategory(req.params.convenId , menuData[pageInfo.name].menu[pageInfo.secondParam].menu)){
		isExistCtgr = true;
		pageInfo.categoryParam = req.params.convenId;
		pageInfo.categoryName = menuData[pageInfo.name].menu[pageInfo.secondParam].menu[pageInfo.categoryParam].name;
	}else{
		pageInfo.categoryParam = false;
	}

	if(isExistMenu && isExistCtgr){
		pageInfo.menuItems = menuData[pageInfo.name];

		resultHtml = require(getResultHtmlPath(pageInfo.name , pageInfo.secondParam , pageInfo.categoryParam));
		pageInfo.resultHtml = resultHtml;
	}

    res.render('index', pageInfo);
});



app.listen(PORT , function(){
	console.log('Example app lsitening on port '+PORT+'!');
});
