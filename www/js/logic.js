server = "http://localhost:8000/app_appuestaSocial/servidor/";

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
