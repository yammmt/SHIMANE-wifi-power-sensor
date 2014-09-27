var Img = new Array();
Img[0] = new Image();
Img[0].src = "img/shimane.png";
Img[1] = new Image();
Img[1].src = "img/okayama.png";
Img[2] = new Image();
Img[2].src = "img/ehime.png";
Img[3] = new Image();
Img[3].src = "img/tokushima.png";

changeShimane = function() {
    console.log("changeShimane");
    var nextImg = Math.round(Math.random()*3);
    document.getElementById("shimaneButton").src = Img[nextImg].src;
};

getWifiPower = function() {
    console.log("getWifiPower");

    // 4debug
    var netNum = Math.round(Math.random()*15);
    var aveNum = Math.round(Math.random()*100)+1;
    var netPow = netNum*aveNum;

    document.getElementById("num").innerHTML = "検出数 : " + netNum;
    document.getElementById("ave").innerHTML = "平均強度 : " + aveNum;
    document.getElementById("pow").innerHTML = "総合電波力 : " + netPow;
    changeShimane();

// 以下, manifest.webapp に type:"certified" を追加しなければ動かず
// 追加するとボタン無効に
/*
    var wifi = navigator.mozWifiManager;

    if(wifi) {
        var request = wifi.getNetworks();
        request.onsuccess = function () {
	    var networks = this.result;
	    var numElm = document.getElementById(""num");
	    var aveElm = document.getElementById("ave");
	    var powElm = document.getElementById("pow");

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

            changeShimane();
        }

        request.onerror = function (err) {
	    var infoElm = document.getElementById("info");
	    infoElm.innerHTML += 'エラーが発生しました。再読み込みしてください。';
        }
    }
    else {
        window.alert("NO Wi-Fi err");
    }
*/
};

go2Shimane = function() {
    alert('hi');
    document.location="./shimane.html";
};