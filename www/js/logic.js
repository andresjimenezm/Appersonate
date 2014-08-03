//server = "http://localhost:8000/app_appuestaSocial/servidor/";
server = "http://107.21.120.88/servidor/";

user_auth = {}
$(function(){
	$.post(server+"Users/is_auth_xhr",{},function(islogin_dataResponse){
		islogin_dataResponse = JSON.parse(islogin_dataResponse)
		if(islogin_dataResponse.status = "is_auth_ok" ){
			user_auth = islogin_dataResponse
		}else{
			location = "login.html";
		}}
	);

})

	

cerrarSesion = function(){
	$.post(server+"Users/logout_xhr",{},function(logout_dataResponse){
		logout_dataResponse = JSON.parse(logout_dataResponse)
		if(logout_dataResponse.status = "logout_ok" ){
			location = "login.html";
		}
		
	})
}


denunciar = function(cod_subcategoria, nombre_subcategoria, cod_categoria, nombre_categoria){
	localStorage.setItem("categoria",JSON.stringify(
	{
		categoria:{
			codigo:cod_categoria,
			nombre:nombre_categoria
		},
		subcategoria:{
			codigo:cod_subcategoria,
			nombre:nombre_subcategoria
		}
	}))

	location = "denuncia.html"
}

