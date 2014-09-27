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
        zoom: 17,
        center: latlng, 
        scaleControl: false,
        mapTypeControl : false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var myMap = new google.maps.Map(document.getElementById('print_zone'), mapOptions);
    console.log(myMap);
};

back2Shimane = function() {
    document.location = "./index.html";
};