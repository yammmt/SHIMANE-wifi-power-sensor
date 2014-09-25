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
    var request = wifi.getNetworks();

    request.onsuccess = function () {
	var networks = this.result;
	var numElm = document.getElementById("num");
	var aveElm = document.getElementById("ave");
	var powElm = document.getElementById("pow");
	var comElm = document.getElementById("com");

	var netNum = 0;
	var netPow = 0;

        networks.forEach(function (network) {
	    netNum++;
	    netPow += network.relSignalStrength;
        });
        aveNum = Math.round(netPow/netNum);

        numElm.innerHTML = "検出数 : " + netNum;
        aveElm.innerHTML = "平均強度 : " + aveNum;
        powElm.innerHTML = "総電波力 : " + netPow;
	var wifiPref = myShimane(netNum);
	comElm.innerHTML = wifiPref;

        changeShimane();
    }

    changeShimane = function() {
    	document.getElementById("pref").src = img[Math.round(Math.random()*3)].src;
    	document.getElementById("pref").width = Math.round(Math.random()*255);
    	document.getElementById("pref").height = Math.round(Math.random()*255);
    }

    request.onerror = function (err) {
	    var infoElm = document.getElementById("info");
	    infoElm.innerHTML += 'Err occured. Try again.';
    };
});
