// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.

$(".quadrato").each(function () {
    var random = generaRandom(0, 10);
    $(this).text(random);
});
//creo la funzione per generare il numero random (min e max inclusi)
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(generaRandom(0, 2));
