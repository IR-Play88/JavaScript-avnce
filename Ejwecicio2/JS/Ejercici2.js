/*Ejercicio 1 */
function cuadrado() {
    let alto = document.getElementById('ialtoCuadrado').value;
    let ancho = document.getElementById('ianchoCuadrado').value;
    let figura = document.getElementById('resCuadrado');
    let res = "";

    for (let a = 0; a < alto; a++) {
        for (let h = 0; h < ancho; h++) {
            res += (a > 0 && h > 0 && a < alto - 1 && h < ancho - 1) ? "&nbsp;" : "*";
        }
        res += "</br>";
    }

    figura.innerHTML = res;
}
function diamante() {
    let alto = parseInt(document.getElementById("ialtoDiamante").value);
    let figura = document.getElementById('resDiamante');
    let res = "";

    for (let l = 1; l <= alto -2; l++) {
        res += "&nbsp;".repeat(alto);
        res += "*".repeat(l);
        res += "<br>";
    }

    for (let l = alto - 3; l > 0; l--) {
        res += "&nbsp;".repeat(alto);
        res += "*".repeat(l);
        res += "<br>";
    }

    figura.innerHTML = res;
}
/*
function diamante() {
    let alto = document.getElementById("ialtoDiamante").value;
    let figura = document.getElementById('resDiamante');
    let secuencia = "";
    let limite = 1;

    for (let l = 1; l <=alto; l++) {
        for(var c = 1; c<=limite;c++)
            secuencia += "*";
            secuencia += "</br>";
        
            if(l<alto/2)
    limite ++
            else if(l!=alto/2)
            limite --
    }

    figura.innerHTML = secuencia;

}
*/
/*Ejercicio 2 */
var colores = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa",];

function color() {
    let colorMio = document.getElementById("icolor").value;
    let figura = document.getElementById('resEjercicio2');
    let colorEncontrado = "";

    for (let i = 0; i < colores.length; i++) {
        if (colores[i] === colorMio) {
            colorEncontrado = true;
            break;
        }
    }
    if (colorEncontrado) {
        figura.innerHTML = "Está el color " + colorMio;
    } else {
        figura.innerHTML = "No está el color " + colorMio;
    }
}


/*Ejercicio 3*/
var numeros = new Array();
let max = 50;
let min = -50;

function mostrar() {
    document.getElementById("numeros").value = numeros;
    document.getElementById("numeros2").value = numeros2;
}
function aleatorio(max, min) {
    for (var i = 0; i < 20; i++) {
        numeros[i] = Math.floor(Math.random()  * (max - min) + min);
    }
    mostrar();
}

/*Ejercicio 4*/

/*Ejercicio 5*/
/*Ejercicio 6*/


/*Ejercicio 7*/