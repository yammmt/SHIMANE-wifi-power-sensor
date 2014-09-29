doAction = function() {
    var opt = {
        enableHighAccuracy: true,
        timeout: 10000
    };
    navigator.geolocation.getCurrentPosition(getPosition, error, opt)
};

generateMap = function(lat,lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var myMap = new google.maps.StreetViewPanorama(
        document.getElementById("gmap"), {
            position: latlng,
            pov: {
                heading: 0,
                pitch: 5
            }
        }
    );
};

getPosition = function(p) {
    var lat = p.coords.latitude;
    var lng = p.coords.longitude;
    generateMap(lat, lng);
};

error = function(err) {
    alert("ERROR("+err.code+")/n"+err.message);
};

back2Shimane = function() {
    document.location = "./index.html";
};