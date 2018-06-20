$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

 // var APP.baseUrl = 'http://fullstack.net.cn:3000';


});

 var APP = {
		baseUrl:'http://fullstack.net.cn:3000'
	}


$.fn.serializeToJson = function() {

	var formArr = $(this).serializeArray();

	var result = {};

	formArr.forEach(function(item){
		result[item.name] = item.value;
	})
	return result;
}


//cokie
$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});
