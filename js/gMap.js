doAction = function() {
    var opt = {
        enableHighAccuracy: true,
        timeout: 10000
    };
    navigator.geolocation.getCurrentPosition(getPosition, error, opt)
};

generateMap = function(lat,lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    console.log(latlng);

    var mapOptions = {
        position: latlng,
        pov: {
            heading: 0,
            pitch: 5
        }
    };
    var myMap = new google.maps.StreetViewPanorama(document.getElementById('gmap'), mapOptions);

/*
    var mapOptions = {
        zoom: 20,
        center: latlng,
        scaleControl: false,
        mapTypeControl : false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var myMap = new google.maps.Map(document.getElementById('gmap'), mapOptions);
*/

    console.log('wifiNum:' + getCookie('wifiNum'));
    drawLine(Number(getCookie('wifiNum')));
};

// クッキーの値を取得 getCookie(クッキー名); //
function getCookie(c_name){
    var st = "";
    var ed = "";
    if(document.cookie.length > 0){
        st = document.cookie.indexOf(c_name + "=");
        if(st != -1){
            st = st+c_name.length+1;
            ed = document.cookie.indexOf(";",st);
            if(ed == -1) ed=document.cookie.length;
            return unescape(document.cookie.substring(st,ed));
        }
    }
    return "";
}

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