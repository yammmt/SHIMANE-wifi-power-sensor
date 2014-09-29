doAction = function() {
    var opt = {
        enableHighAccuracy: true,
        timeout: 10000
    };
    navigator.geolocation.getCurrentPosition(getPosition, error, opt)
};

test = function(lat,lng) {
/*
    var map = new google.maps.Map(
        document.getElementById("gmap"), {
            zoom : 7,
            center : new google.maps.LatLng(lat, lng),
	    mapTypeId : google.maps.MapTypeId.ROADMAP
        }
    );
*/
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        position: latlng,
        pov: {
            heading: 0,
            pitch: 5
        }
    };
/*
    var myMap = new google.maps.Map(
        document.getElementById("gmap"), {
            zoom:20,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    );
*/
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
    //generateMap(lat, lng);
    test(lat,lng);
};

error = function(err) {
    alert("ERROR("+err.code+")/n"+err.message);
};

generateMap = function(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        position: latlng,
        pov: {
            heading: 0, 
            pitch: 5
        }
    };
    var myMap = new google.maps.StreetViewPanorama(document.getElementById('gmap'), mapOptions);
};

back2Shimane = function() {
    document.location = "./index.html";
};