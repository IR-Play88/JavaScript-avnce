function cuadrado() {
    var val = valor.value;
    return val * val;
}

function raiz2() {
    var valor = document.getElementById("valor").value;
    return Math.sqrt(valor);
}

function factorial() {
    var valor = document.getElementById("valor").value;

    var fact = 1;
    for (var i = 1; i <= valor; i++) {
        fact *= i;
    }
    return fact;
}

function suma() {
    var num1 = eval(document.getElementById("num1").value);
    var num2 = eval(document.getElementById("num2").value);

    document.getElementById("res").value = num1 + num2;

}

function resta() {
    var num1 = eval(document.getElementById("num1").value);
    var num2 = eval(document.getElementById("num2").value);

    document.getElementById("res").value = num1 - num2;

}

function multi() {
    var num1 = eval(document.getElementById("num1").value);
    var num2 = eval(document.getElementById("num2").value);

    document.getElementById("res").value = num1 * num2;

}


function divi() {
    var num1 = eval(document.getElementById("num1").value);
    var num2 = eval(document.getElementById("num2").value);

    document.getElementById("res").value = num1 / num2;

}
