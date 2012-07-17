// Home page

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 5000, enableHighAccuracy: true });
}

var onSuccess = function(position) {
    /*alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');*/
    
    var wWidth = $(window).width();
    $("#map_canvas").css("width", wWidth);    
    
    var pos = new google.maps.LatLng(position.coords.latitude,
            position.coords.longitude);        
    
    
    var lago = new google.maps.LatLng(9.110572,-79.378581);        
    
    var image = new google.maps.MarkerImage(
            'images/man.png',
            new google.maps.Size(32,37),
            new google.maps.Point(0,0),
            new google.maps.Point(22,37)
    );    
    
    var contentString = '<img src="images/details.jpg" width="170">';
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });    
    
    $('#map_canvas').gmap(
            { 'center' : pos, 
              'zoom' : 15,
              'mapTypeControl' : false,
              'navigationControl' : true,
              'streetViewControl' : false 
            })
            .bind('init', function(evt, map) { 
                
                $('#map_canvas').gmap('addMarker',{ 
                    'position': map.getCenter(),
                    'icon':image
                });
                
                var mLago = $('#map_canvas').gmap('addMarker',{ 
                    'position': lago
                });
                
                google.maps.event.addListener(mLago, 'click', function() {
                    infowindow.open(map,marker);
                  });                
                
                
                
            });        
    
    
};

$(window).resize(function() {
    var wWidth = $(window).width();
    $("#map_canvas").css("width", wWidth);    
    // trigger a resize event on the map so it reflects the new size
    if(map != null) {
      google.maps.event.trigger(map, 'resize');
    }
  });



// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


$('#page-home').live("pageinit", function() {
    

    
    




    //navigator.geolocation.getCurrentPosition(onSuccess, onError);    

    /*$('#map_square').click( function() { 
        $.mobile.changePage($('#page-map'), {});
    });*/
});