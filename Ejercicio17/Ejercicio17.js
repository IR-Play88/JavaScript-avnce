/*
function contar(texto) {
    var textos = new Array();
    var letra = document.getElementById("letra");
    var contador = 0;

    for (let i = 0; i < texto.lengt; i++) {
        if (textos = ) {
            contador ++
        }
    }

    alert(texto + " tiene la letra " + letra + " numero de vecess");
}
*/
//No iba tan mal xd
function contar() {
    var texto = document.getElementById("texto").value;
    var letra = document.getElementById("letra").value;
    
    var contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == letra) {
            contador ++;
        }
    }
    alert("'" + texto + " tiene" + contador +  " " + letra+ "/s");
}