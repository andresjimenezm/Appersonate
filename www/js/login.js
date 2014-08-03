$(function(){



	server = "http://localhost:8000/app_appuestaSocial/servidor/";

	$.post(server+"Users/is_auth_xhr",{},function(islogin_dataResponse){
		
		islogin_dataResponse = JSON.parse(islogin_dataResponse)
		if(islogin_dataResponse.status = "is_auth_ok" ){
			location = "inicio.html";
		}
		
	})
	$(".form-signin").submit(function(){
		cedula = $("#cedula").val()
		pass = $("#pass").val()

		if(cedula.length >= 8 && pass != ""){
			dataRequest = {
				"data[User][username]":cedula,
				"data[User][password]":pass
			}
			$.post(server+"Users/login_xhr",dataRequest,function(dataResponse){
				console.log(dataResponse);
				dataResponse = JSON.parse(dataResponse);
				if(dataResponse.status == "auth_ok")
					location = "inicio.html";
				else 
					alert("Fallo la Autenticacion")
			})
		}


		return false;
	})
})