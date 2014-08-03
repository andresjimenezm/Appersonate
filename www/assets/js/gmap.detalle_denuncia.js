/**
* Neo v1.0.0 by yokCreative
* Copyright 2013  
* mock up map for index.html
*/


// Google Maps

	$(window).load(function () {

		var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};

		  /*
		  console.log('Your current position is:');
		  console.log('Latitude : ' + crd.latitude);
		  console.log('Longitude: ' + crd.longitude);
		  console.log('More or less ' + crd.accuracy + ' meters.');
*/
		  //$('#my-map').map.setCenter(new google.maps.LatLng( crd.latitude, crd.longitude ) );
		  denuncia = JSON.parse(localStorage.getItem("denuncia"));
		  initGoogleMap(denuncia.complaints.latitude, denuncia.complaints.longitude); //init Gmap3
		
		
		//navigator.geolocation.getCurrentPosition(success, function(err){}, options);
		
	});

	function initGoogleMap(lat, lon) {
		
		$('#my-map').gmap3({
			map: {
				options: {
					center:[lat, lon],
					zoom: 15, //adjust this depending upon how much you want to see
					styles: [{
						stylers: [{
								hue: ''
							}, //this is the accent color
							
						]
					}]
				}
			},
			marker:{
				values: [
				  {
					latLng:[lat, lon],
					options:{
					  icon: {
								path: fontawesome.markers.MAP_MARKER,
								scale: 0.7,
								strokeWeight: 0.2,
								strokeColor: 'E55151',
								strokeOpacity: 1,
								fillColor: '#E55151',
								fillOpacity: 1
							},
					}
				  }
			]},
		options: {
					draggable: false,
				}
			
		});
	
	}


 