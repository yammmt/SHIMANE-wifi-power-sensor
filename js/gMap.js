var LATLNG;

doAction = function() {
    var opt = {
        enableHighAccuracy: true,
        timeout: 20000
    };
    navigator.geolocation.getCurrentPosition(initPosition, error, opt)
};

generateMap = function(data, status) {
    if(status != google.maps.StreetViewStatus.OK) {
        console.log("NG");
        var mapOptions = {
            zoom: 20,
            center: LATLNG,
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            disableDoubleClickZoom: true,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var myMap = new google.maps.Map(document.getElementById('gmap'), mapOptions);
    }
    else {
        console.log("OK");
        var mapOptions = {
            position: data.location.latLng,
            pov: {
                heading: 0,
                pitch: 5
            }
        };
        var myMap = new google.maps.StreetViewPanorama(document.getElementById('gmap'), mapOptions);
    }
    console.log('wifiNum:' + getCookie('wifiNum'));
    drawLine(Number(getCookie('wifiNum')));
};

// クッキーの値を取得 getCookie(クッキー名);  (引用) //
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

initPosition = function(p) {
    var lat = p.coords.latitude;
    var lng = p.coords.longitude;

    LATLNG = new google.maps.LatLng(lat, lng);
    console.log(LATLNG);

    var sv = new google.maps.StreetViewService();
    sv.getPanoramaByLocation(LATLNG, 50, generateMap); 
};

error = function(err) {
    alert("ERROR("+err.code+")/n"+err.message);
};

back2Shimane = function() {
    document.location = "./index.html";
};