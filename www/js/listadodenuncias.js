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
		$.post(server+"Complaints/list_complaints_by_user_id",{auth_user_id:user_auth.dataUser.id},function(complaints_dataResponse){
			complaints_dataResponse = JSON.parse(complaints_dataResponse);

			$.each(complaints_dataResponse,function(key_complaint,data_complaint){
				//console.log(key_complaint);
				//console.log(data_complaint);

				var Item = $('<tr>'+
                      '<td style="color:#000">'+data_complaint.Tipologies.name+'</td>'+
                      '<td style="color:#000">'+data_complaint.Subtipologies.name+'</td>'+
                      '<td style="color:#000">'+data_complaint.States.name+'</td>'+
                      '<td><button class="btn btn-default" onClick="location.href=\'revisar_reclamos.html#id\'" >Revisar</button></td>'+
                    '</tr>');

				console.log(Item);


});

		});
	});
});

