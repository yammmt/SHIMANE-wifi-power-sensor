doAction = function() {
    var opt = {
        enableHighAccuracy: true,
        timeout: 10000
    };
    navigator.geolocation.getCurrentPosition(getPosition, error, opt)
};

getPosition = function(p) {
    var lat = p.coords.latitude;
    var lng = p.coords.longitude;
    generateMap(lat, lng);
};

error = function(err) {
    alert("ERROR("+err.code+")/n"+err.message);
};

generateMap = function(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        position: latlng,
        pov: {
            heading: 30, 
            pitch: 5
        }
    };
    var myMap = new google.maps.StreetViewPanorama(document.getElementById('print_zone'), mapOptions);
};

back2Shimane = function() {
    document.location = "./index.html";
};