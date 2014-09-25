var img = new Array();
img[0] = new Image();
img[0].src = "img/ehime.png";
img[1] = new Image();
img[1].src = "img/okayama.png";
img[2] = new Image();
img[2].src = "img/shimane.png";
img[3] = new Image();
img[3].src = "img/tokushima.png";

myShimane = function(wifiNum) {
    if(wifiNum > 10) {
	return 'Tokyo';
    }
    else if(wifiNum > 6) {
	return 'Osaka';
    }
    else if(wifiNum > 3) {
	return 'Hiroshima';
    }
    else if(wifiNum > 0) {
	return 'SHIMANE';
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var wifi = navigator.mozWifiManager;
    var infoElm = document.getElementById("info");
    var request = wifi.getNetworks();

    request.onsuccess = function () {
	var networks = this.result;
	var numElm = document.getElementById("num");
	var aveElm = document.getElementById("ave");
	var powElm = document.getElementById("pow");
        var denElm = document.getElementById("den");
	var comElm = document.getElementById("com");

	var netNum = 0;
	var netPow = 0;

        networks.forEach(function (network) {
	    netNum++;
	    netPow += network.relSignalStrength;
        });
        aveNum = Math.round(netPow/netNum);
        var baseDens = 1200*Math.pow((Math.pow(10, -3)), 2);
        var guessedDensity = netNum/baseDens;
        var wifiPref = myShimane(netNum);

        infoElm.innerHTML = "";
        numElm.innerHTML = "検出数 : " + netNum;
        aveElm.innerHTML = "平均強度 : " + aveNum;
        powElm.innerHTML = "総電波力 : " + netPow;
        denElm.innerHTML = "推定人口密度 : " + guessedDensity.toFixed(2);
        comElm.innerHTML = "Wi-Fi力 : " + wifiPref;

        changeShimane();
    }

    changeShimane = function() {
    	document.getElementById("pref").src = img[Math.round(Math.random()*3)].src;
    	document.getElementById("pref").width = Math.round(Math.random()*255);
    	document.getElementById("pref").height = Math.round(Math.random()*255);
    }

    request.onerror = function (err) {
	    infoElm.innerHTML += 'Err occured. Try again.';
    };
});
