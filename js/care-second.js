$(function() {
	//获取数据
	$.ajax({
		url:`${APP.baseUrl}/category/querySecondCategoryPaging`,
		type:'get',
		data:{
			page:1,
			pageSize:10
		},
		success:function(data) {
			console.log(data)
			var html = template('secondTmp',{
				list:data,
				api:APP.baseUrl
			});
			$('#secondTab').html(html);
		}
	})





	//添加分类数据， 渲染在弹出框

		$.ajax({
			url:`${APP.baseUrl}/category/queryTopCategoryPaging`,
			type:'get',
			data:{
				page:1,
				pageSize:10000
			},
			success:function(data){
				console.log(data)
				var html = template('secondTwo',data);


				$('#secondSelect').html(html);

			}
		})

	var brandLogo = '';

	//获取图片地址
	$('#fileUpload').fileupload({
	    dataType: 'json',
	    done: function (e, data) {
	    	console.log(data);
	    	// 存储图片地址
	    	brandLogo = data._response.result.picAddr;
	    	// 拼接图片url
	    	var imgUrl= APP.baseUrl + data._response.result.picAddr;
	    	// 将图片渲染到页面中
	     	$("#imgPreview").attr("src",imgUrl);
	    }
	});

	//添加
	$('#secondBtn').on('click',function() {
		// 获取二级分类名称
		var brandName = $('#brandName').val();
		// 获取所属一级分类
		var categoryName = $('#secondSelect').val();

		console.log(categoryName)

		var hot = 1;

		// $.ajax({
		// 	type: 'post',
		// 	url: `${APP.baseUrl}/category/addSecondCategory`,
		// 	data: {
		// 		brandName,
		// 		categoryId,
		// 		brandLogo,
		// 		hot
		// 	},
		// 	success: function (response) {
		// 		if (response.success) {
		// 			location.reload();
		// 		}else {
		// 			alert(response.message);
		// 		}
		// 	}
		// })
	})

})