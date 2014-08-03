//server = "http://localhost:8000/app_appuestaSocial/servidor/";
server = "http://107.21.120.88/servidor/";

$(function(){
	gotoDetalle = function(denuncia){
		//console.log(denuncia);
		localStorage.setItem("denuncia",JSON.stringify(denuncia));
		location = "revisar_reclamos.html";
	}
	user_auth = {}
	$.post(server+"Users/is_auth_xhr",{},function(islogin_dataResponse){
		
		islogin_dataResponse = JSON.parse(islogin_dataResponse)
		if(islogin_dataResponse.status = "is_auth_ok" ){
			user_auth = islogin_dataResponse
		}else{
			location = "login.html";
		}
		$.post(server+"Complaints/list_complaints_by_user_id",{auth_user_id:user_auth.dataUser.id},function(complaints_dataResponse){
			complaints_dataResponse = JSON.parse(complaints_dataResponse);


			$("#denuncias_container").empty();
			$.each(complaints_dataResponse,function(key_complaint,data_complaint){
				//console.log(key_complaint);
				//console.log(data_complaint);

				var Item = $('<tr>'+
					'<td style="color:#000">'+data_complaint.complaints.id+'</td>'+
                      '<td style="color:#000">'+data_complaint.Tipologies.name+'</td>'+
                      '<td style="color:#000">'+data_complaint.Subtipologies.name+'</td>'+
                      '<td style="color:#000">'+data_complaint.States.name+'</td>'+
                      '<td><button class="btn btn-default" onClick=\'gotoDetalle('+JSON.stringify(data_complaint)+')\' >Ver</button></td>'+
                    '</tr>');

				$("#denuncias_container").append(Item);

			});

		});
	});
});

