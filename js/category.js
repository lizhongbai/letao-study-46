$(function() {

	$.ajax({
		type:'get',
		url:`${APP.baseUrl}/category/queryTopCategoryPaging`,
		data:{
			page:1,
			pageSize:3
		},
		success:function(data) {
			console.log(data)

			var html = template('categoryTmp',data);

			$('#categoryTbl').append(html);
		}
	})
})