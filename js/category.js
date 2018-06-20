$(function() {

	var page = 1;

	var pageSize = 3;

	// 总页数
	var totalPage = 0;



	getData();

	$('#prev').on('click',function() {
		page--;

		if (page < 1) {
			page = 1;
			alert('已经是第一页了')
			return;
		}
		getData();
	})


	$('#next').on('click',function() {
		page++;

		if (page > totalPage) {
			page = totalPage;
			alert('已经没有更多数据了');
			return;
		}
		getData()
	})








function getData() {
	$.ajax({
		type:'get',
		url:`${APP.baseUrl}/category/queryTopCategoryPaging`,
		data:{
			page:page,
			pageSize:pageSize
		},
		success:function(data) {
			console.log(data)

			var html = template('categoryTmp',data);

			$('#categoryTbl').append(html);

			 totalPage = Math.ceil(data.total / pageSize);
		}

	})


}




//
 $('#cateGoryBtn').on('click' , function() {

 		var txt = $('#cateGoryIpu').val();
 		// console.log(txt)

 		if(!$.trim(txt)) {
 			alert('重写');
 		}

 		$.ajax({
 			url:`${APP.baseUrl}/category/addTopCategory`,
 			data:{
 				categoryName:txt
 			},
 			type:'post',
 			success:function(data) {
 				console.log(data)
 				if(data.success) {
 					location.reload();
 				}
 			}
 		})
 })


})



