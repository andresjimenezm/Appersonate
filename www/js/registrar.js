server = "http://localhost:8000/app_appuestaSocial/servidor/";
$(function(){
	$("#registrar").submit(function(){
	dataRequest = {
			"data[User][password]":$("#password").val(),
			"data[User][username]":$("#document").val(),
			"data[User][document]":$("#document").val(),
			"data[User][email]":$("#email").val(),
			"data[User][phone]":$("#phone").val(),
			"data[User][createdby]":1,
			"data[User][deleted]":0,
			"data[User][created]":"NOW()",
			"data[User][group_id]":2
		};

$.post(server+"Users/add_new_user_xhr",dataRequest,function(response){
	console.log(response);
	response = JSON.parse(response)

	if(response.status == "registered_user_fail")
		alert(response.msg)
	else
		location = "login.html"
})

		return false;
	})
})