var fs = require('fs');
var express = require('express');
var app = express();
var menuData = require('./data/menu');
var resultHtml;
var PORT = process.env.PORT || 20000;

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


app.get('/',function(req,res){
	res.redirect(menuData[Object.keys(menuData)[0]].path);
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
