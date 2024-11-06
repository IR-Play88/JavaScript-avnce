function factorial(n) {
    if (n < 2) return 1;
    else return (n * factorial(n - 1));
}

const NUM_MAXIMO = 10;
var primeros = new Array(NUM_MAXIMO);

for (let i = 0; i < NUM_MAXIMO; i++) {
    primeros[i] = Math.floor((Math.random() * 10));
}



factoriales = primeros.map(function (x) {
    return factorial(x);
})


for (let i = 0; i < NUM_MAXIMO; i++) {
    document.write( primeros[i] + " ==> " + factoriales[i] + "<br>");
}