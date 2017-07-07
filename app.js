var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var menuData = require('./data/menu');
var formidable = require('formidable');
var bodyParser = require('body-parser');
var http = require('http');
var parseXlsx  = require('excel');

var resultHtml;
var PORT = process.env.PORT || 20000;
var storeJsonFile;


Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};


var cityCategoryArray = [];

var objToString = function(data){
	var count = 0;
	var countCtgr = 0;
	var addrList = data.data.contentObj;
	var str = '{\n';
	str += '    "title" : "'+data.title+'" ,\n'
	str += '    "categoryList" : [\n';
	/* START For loop */
	for(var i = 0; i < data.ctgrList.length; i++ ){
	str += '        {\n';
	console.log(data.ctgrList[i]);
	str += '            "en" : "'+data.ctgrList[i].en+'",\n';
	str += '            "kor" : "'+data.ctgrList[i].kor+'"\n';
	if(i == data.ctgrList.length-1){
	str += '        }\n';
	}else{
	str += '        },\n';
	}
	}
	/* END For loop */
	str += '    ],\n'
	str += '    "addressList" : {\n';
	/* START For loop */
	for(var cityName in addrList){
	str += '        "'+cityName+'" : [\n';
	/* START Loop in city */
	for(var i = 0; i < addrList[cityName].length; i++ ){
	str += '            {\n';
	/* START Loop in city of category  */
	for(var ctgrName in addrList[cityName][i]){
	if(countCtgr == Object.size(addrList[cityName][i])-1){
		str += '                "'+ctgrName+'" : "'+addrList[cityName][i][ctgrName]+'"\n';
		countCtgr = 0;
	}else{
		str += '                "'+ctgrName+'" : "'+addrList[cityName][i][ctgrName]+'",\n';
		countCtgr += 1;
	}

	}
	/* END Loop in city of category  */
	if(i == addrList[cityName].length - 1){
	str += '            }\n';
	}else{
	str += '            } ,\n';
	}

	}
	/* END Loop in city */
	if(count == Object.size(addrList) - 1){
	str += '        ]\n';
	}else{
	str += '        ],\n';
	}
	count++;
	}
	/* END For loop */
	str += '    }\n'
	str += '}\n';

	return str;
}

var getCityName = function(korName){
	var nameArray = [
		{
			en : 'seoul',
			kor : ['서울' , '서울시' , '서울특별시'],
		},
		{
			en : 'kyungki',
			kor : ['경기','경기도'],
		},
		{
			en : 'incheon',
			kor : ['인천','인천시','인천광역시'],
		},
		{
			en : 'sejong',
			kor : '세종시',
		},
		{
			en : 'busan',
			kor : ['부산','부산시','부산광역시'],
		},
		{
			en : 'ulsan',
			kor : ['울산','울산시','울산광역시'],
		},
		{
			en : 'daegu',
			kor : ['대구','대구시','대구광역시'],
		},
		{
			en : 'kyungnam',
			kor : ['경남','경상남도'],
		},
		{
			en : 'kyungbuk',
			kor : ['경북','경상북도'],
		},
		{
			en : 'gwangju',
			kor : ['광주','광주시','광주광역시'],
		},
		{
			en : 'jeonnam',
			kor : ['전남','전라남도'],
		},
		{
			en : 'jeonbuk',
			kor : ['전북','전라북도'],
		},
		{
			en : 'chungnam',
			kor : ['충남','충청남도'],
		},
		{
			en : 'chungbuk',
			kor : ['충북','충청북도'],
		},
		{
			en : 'daejun',
			kor : ['대전','대전시','대전광역시'],
		},
		{
			en : 'kangwon',
			kor : ['강원','강원도'],
		},
		{
			en : 'jeju',
			kor : ['제주','제주시','제주도'],
		}
	];

	// var nameObj = nameArray.filter(function(obj){
	// 	return obj.en == engName;
	// });
	var returnObj;
	var nameObj = nameArray.map(function(obj , index){
		for(var i = 0; i < obj.kor.length; i++){
			if(obj.kor[i] == korName){
				if(returnObj == undefined){
					returnObj = {};
				}
				returnObj.en = obj.en;
				returnObj.kor = obj.kor[0];
			}
		}
	});

	return returnObj;
};

var download = function(url, dest, cb) {
	var file = fs.createWriteStream(dest);
	var request = http.get(url, function(response) {
		response.pipe(file);
		file.on('finish', function() {
			file.close(cb);
		});
	});
}

var handleAddress = function(data){
	var newJsonData = {
		title : [],
		contentObj : {
			all : []
		}
	};

	var objNameArray = [
		'name',
		'address',
		'phone',
		'map'
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
				var cityNm = getCityName(data[rowsCount][0]);
				if(cityNm == undefined){
					// console.log('그룹명 없음');
					cityNm = 'null'
				}else{
					cityNm = cityNm.en;
					// console.log('?? : ',cityNm);
				}

				if(colsCount == 0){

					// console.log('?? : ',cityNm);

					if(newJsonData.contentObj[cityNm] == undefined){
						if(cityNm === 'null'){
							var hasNullCtgr = cityCategoryArray.map(function(obj , index){
								if(obj.en == 'null'){
									return obj;
								}
							});

							if(hasNullCtgr.length == 0){
								cityCategoryArray[count] = {
									en : 'null',
									kor : 'null'
								};
							}

						}else{
							cityCategoryArray[count] = getCityName(data[rowsCount][0]);
						}

						newJsonData.contentObj[cityNm] = [];
						count++;

					}
				}else{
					var targetObj = newJsonData.contentObj[cityNm];
					/* Input data to category which it has own */
					if(colsCount == 1){
						// console.log(newJsonData.contentObj[cityCategoryArray[count-1].en]);
						targetObj.push({});
					}

					// console.log(cityCategoryArray[count-1].en);

					targetObj[targetObj.length-1][objNameArray[colsCount-1]] = data[rowsCount][colsCount];
				}

				if(data[rowsCount].length-1 == colsCount){
					newJsonData.contentObj['all'].push(newJsonData.contentObj[cityNm][newJsonData.contentObj[cityNm].length-1]);
				}

			}



		}
		colsCount = 0;
	}

	// console.log(cityCategoryArray);
	console.log(newJsonData);
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

	parseXlsx(path.join(__dirname,'/uploads/'+req.body.fileName), function(err, data) {
		if(err) throw err;

		storeJsonFile = path.join(__dirname,'/uploads/'+req.body.paramName+'.json');

		data = (function(){
			var newData = [];

			data.map(function(array , index){
				// var count = 0;
				var i = 0;

				for(; i < array.length; i++){
					if(array[i] != ''){
						newData.push(array);
						break;
						// count += 1;
					}
				}
			});
			// console.log(newData);
			return newData;
		})();

		fs.writeFile(path.join(__dirname,'/uploads/'+req.body.paramName+'.json'), objToString({title : req.body.title,data : handleAddress(data) , ctgrList : cityCategoryArray}) , 'UTF-8' , function(err) {
		    if(err) {
		        return console.log(err);
		    }

		    console.log("The file was saved!");
		});

		res.send({
			result : true,
			msg : req.body.file,
			title : req.body.title,
			data : handleAddress(data),
			ctgrList : cityCategoryArray,
			// fileLink : path.join(__dirname,'/uploads/'+req.body.paramName+'.json')
			fileLink : '/uploads/'+req.body.paramName+'.json'
		});

	});
});

app.get('/download',function(req,res){
	res.download(path.join(__dirname,req.query.json));
});

app.post('/upload',function(req,res){
	var fileInfo;
	var form = new formidable.IncomingForm();

	form.uploadDir = path.join(__dirname , '/uploads');

	form.on('file', function(field, file) {
		fs.rename(file.path, path.join(form.uploadDir, file.name));
		fileInfo = file;
	});

	form.on('error', function(err) {
		console.log('An error has occured: \n' + err);
	});

	form.on('end', function() {
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
