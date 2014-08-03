//server = "http://localhost:8000/app_appuestaSocial/servidor/";
server = "http://107.21.120.88/servidor/";
$(function(){



	user_auth = {}
	$.post(server+"Users/is_auth_xhr",{},function(islogin_dataResponse){
		
		islogin_dataResponse = JSON.parse(islogin_dataResponse)
		if(islogin_dataResponse.status = "is_auth_ok" ){
			user_auth = islogin_dataResponse
		}else{
			location = "login.html";
		}}
	);

	denuncia = JSON.parse(localStorage.getItem("denuncia"));

	$("#referencia").html(denuncia.complaints.id);
	$("#quepaso").html(denuncia.complaints.que_paso);

	$("#tipologia").html(denuncia.Tipologies.name);
	$("#subtipologia").html(denuncia.Subtipologies.name);

	$("#departamento").html(denuncia.Regions.nombre_departamento);
	$("#municipio").html(denuncia.Regions.nombre_municipio);

	$("#fecha_registro").html(denuncia.complaints.created);

	$("#doc_ciudadano").html(denuncia.Users.username);
})