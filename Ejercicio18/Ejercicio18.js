var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function mostrar() {
    document.getElementById("numeros").value = numeros.join('-');
}

function aleatorio() {
    for (var i = 0; i < 10; i++) {
        numeros[i] = Math.floor(Math.random() * 16);
    }
    mostrar();
}

function eliminar() {
    var valor = document.getElementById("eliminar").value;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == valor) {
            numeros.splice(i--, 1);
        }
    }
    document.getElementById("new_numeros").value = numeros.join('-');
    mostrar();
}

function invertir() {
    numeros = numeros.reverse();
    mostrar();
}

function mayor() {
    var max = numeros[0];

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    document.getElementById("mayor").value = max;

    //Es lo mismo lo de arriba que lo he abajo
    //document.getElementById("mayor").value = Math.max(...numeros);
}

function menor() {
    var min = numeros[0];

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] < min) {
            min = numeros[i];
        }
    }
    document.getElementById("menor").value = min;

    //Es lo mismo lo de arriba que lo he abajo
    //document.getElementById("menor").value = Math.min(...numeros);
}

function hexadecimal() {
    var new_numeros = new Array();

    for (let i = 0; i < numeros.length; i++) {
        new_numeros.push(numeros[i].toString(16).toLocaleUpperCase())
    }

    document.getElementById("hexa").value = new_numeros.join('-');

    //Es lo mismo lo de arriba que lo he abajo
    //document.getElementById("hexa").value = (numeros.map(n => n.toString(16).toLocaleUpperCase())).join('-');
}
