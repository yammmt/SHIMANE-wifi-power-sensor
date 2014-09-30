generateRand = function(upperbound) {
    return Math.floor(Math.random()*upperbound);
}

drawLine = function(rep) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var hgt = canvas.height;
    var wdt = canvas.width;

    for(var i=0; i<rep; i++) {
        ctx.beginPath();
        ctx.moveTo(generateRand(wdt), generateRand(hgt));
        ctx.lineTo(generateRand(wdt), generateRand(hgt));
        ctx.lineTo(generateRand(wdt), generateRand(hgt));
        /* ctx.lineTo(generateRand(wdt), generateRand(hgt)); */
        ctx.fillStyle = 'rgba('+generateRand(255)+','+generateRand(255)+','+generateRand(255)+',0.5)';
        ctx.fill();
    }
}
