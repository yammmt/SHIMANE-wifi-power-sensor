document.addEventListener("DOMContentLoaded", function() {
    var wifi = navigator.mozWifiManager;
    var request = wifi.getNetworks();

    request.onsuccess = function () {
	var networks = this.result;
	var numElm = document.getElementById("num");
	var aveElm = document.getElementById("ave");
	var powElm = document.getElementById("pow");
	//var comElm = document.getElementById("comment");

	var netNum = 0;
	var netPow = 0;

        networks.forEach(function (network) {
	    netNum++;
	    netPow += network.relSignalStrength;
        });
	aveNum = Math.round(netPow/netNum);

	numElm.innerHTMl = "検出数 : " + netNum;
        aveElm.innerHTML = "平均強度 : " + aveNum;
	powElm.innerHTML = "総電波力 : " + netPow;
        //comElm.innerHTML = "私の電波力は 5300000 です";
    }

    request.onerror = function (err) {
	var infoElm = document.getElementById("info");
	infoElm.innerHTML += 'エラーが発生しました。再読み込みしてください。';
    };
    
    function sortNetworksByStrength(a, b) {
	return a.signalStrength > b.signalStrength ? 1 : -1;
    }
});
