$.ajax({
	type:'get',
	url:`${APP.baseUrl}/employee/checkRootLogin`,
	async:false,
	success:function(data) {
		console.log(data)
		if(data.error) {
			location.href = 'login.html'
		}
	}
})

$(function() {

	$.ajax({
		type:'get',
		url:`${APP.baseUrl}/user/queryUser`,
		data:{
			page:1,
			pageSize:30
		},
		success:function(data){

			console.log(data)

					var html = template('userTmp',data);

					$('#userTbl').append(html);

		}
	})


	$('#userTbl').on('click','#tmpBtn',function() {

		var id = $(this).attr('data-id');
		var isdelete = $(this).attr('data-isdelete')

		$.ajax({
			type:'post',
			url:`${APP.baseUrl}/user/updateUser`,
			data:{
				id:id,
				isDelete:isdelete==1? 0 : 1
			},
			success:function(data) {
				console.log(data)

				if(data.success) {
					location.reload();
				}
			}
		})
	})
})