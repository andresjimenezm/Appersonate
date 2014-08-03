

server = "http://localhost:8000/app_appuestaSocial/servidor/";
$(function(){

	user_auth = {}
	$.post(server+"Users/is_auth_xhr",{},function(islogin_dataResponse){
		
		islogin_dataResponse = JSON.parse(islogin_dataResponse)
		if(islogin_dataResponse.status = "is_auth_ok" ){
			user_auth = islogin_dataResponse
		}else{
			location = "login.html";
		}
		
	})
	$("#enviar_denuncia").submit(function(){
		if(user_auth.dataUser != undefined){
			//console.log(user_auth);
			user_auth_id = user_auth["dataUser"].id
			categoria = JSON.parse(localStorage.getItem("categoria"));
			datos_ubicacion_denuncia = JSON.parse(localStorage.getItem("datos_ubicacion_denuncia"));
			quepaso = $("#quepaso").val();

			user_id = user_auth_id;
			tipology_id = categoria.categoria.codigo;
			subtipology_id = categoria.subcategoria.codigo;
			region_id = datos_ubicacion_denuncia.municipio;
			state_id = 1;
			latitude = datos_ubicacion_denuncia.lat;
			longitude = datos_ubicacion_denuncia.lon;
			donde = datos_ubicacion_denuncia.detalleDonde;
			que_paso = quepaso;
			response = "";
			created = "now()";
			createdby = 1;
			modified  = "now()";
			modifiedby = 1;
			deleted = 0;




			dataRequest = {
				"user_id":user_id,
				"tipology_id":tipology_id,
				"subtipology_id":subtipology_id,
				"region_id":region_id,
				"state_id":state_id,
				"latitude":latitude,
				"longitude":longitude,
				"donde":donde,
				"que_paso":que_paso,
				"response":response,
				"created":created,
				"createdby":createdby,
				"modified":modified,
				"modifiedby":modifiedby,
				"deleted":deleted
			}


			$.post(server+"complaints/add_new_complaint_xhr",dataRequest,function(dataResponse){
				console.log(dataResponse)
				dataResponse = JSON.parse(dataResponse);
				if(dataResponse.status = "registered_complaint_ok")
					location = "listadoreclamos.html";
				else
					alert(dataResponse.msg);
			})

		}else{
			location = "login.html";	
		}
		
		return false;
	});
})