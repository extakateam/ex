
var imagenes = new Array(
    ['media/img/gif/slogan/slogan0_W.webp'],
    ['media/img/gif/slogan/slogan1_W.webp'],
);

function rotarImagenes() {
        var index = Math.floor((Math.random()*imagenes.length));

        document.getElementById("slogan-g").src = imagenes[index][0];
    }

    onload = function() {
        rotarImagenes();
        setInterval(rotarImagenes,5000);
    }