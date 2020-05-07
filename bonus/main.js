// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

//genero la griglia
$(".container").append(`<div class="griglia"></div>`);

//GENERO I QUADRATI DENTRO LA GRIGLIA
for (var index = 0; index < 25; index++) {
    $(".griglia").append(`<div class="quadrato"></div>`);
}

//per ogni quadrato, genero, e poi inserisco un numero random
$(".quadrato").each(function () {
    var random = generaRandom(0, 10);
    if (random % 2 == 0 && random != 0) {
        var classe = "rosso";
    } else if (random % 2 != 0) {
        var classe = "nero";
    } else {
        var classe = "verde";
    }

    $(this).html(`<p>${random}</p>`).addClass(classe);
});

function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
