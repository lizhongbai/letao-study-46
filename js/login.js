$(function() {
	$('#loginBtn').on('click',function() {
		//获取表单数据

		 var result = $('#loginForm').serializeToJson();
		 console.log(result)

		 if(!$.trim(result.username)) {
		 	alert('用户名错了')
		 	return;
		 }

		 if(!$.trim(result.password)) {
		 	alert('密码错了')
		 	return;
		 }

		 $.ajax({
		 	type:'post',
		 	url:`${APP.baseUrl}/employee/employeeLogin`,
		 	data:result,
		 	success:function(data) {
		 		if(data.success) {
		 			location.href = 'user.html'
		 		}else{
		 			alert(data.message);
		 		}
		 	}
		 })
	})
})