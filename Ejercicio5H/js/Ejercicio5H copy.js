








function colorTexto(despColores) {
    var colores = ['white', 'orange', 'green', 'blue', 'brown', 'purple', 'tomato', 'violet', 'black'];
    var color = despColores.value;

    var pantalla = document.getElementById('pantalla');

    pantalla.style.color = colores[color]
}

function tamaniotexto(numberTamanio) {
    var pantalla = document.getElementById('pantalla');
    pantalla.style.fontSize = numberTamanio.value + "em";

}

function colorFondo(color) {
    pantalla.style.background = color;
}

function colorBorde(radioBorde) {
    var pantalla = document.getElementById('pantalla');
    var colores = ['gray', 'yellow', 'pink'];
    var opcion = radioBorde.value;
    pantalla.style.border = "3px solid " + colores[opcion];
}

function estilotesto(checkTexto) {
    var pantalla = document.getElementById('pantalla');
    switch (checkTexto.name) {
        case 'negrita':
            if (checkTexto.checked)
                pantalla.style.fontWeight = 'bold';
            else pantalla.style.fontWeight = 'normal';
            pantalla.style.fontWeight = ((checkTexto.checked) ? 'bold' : 'normal');
            break;

        case 'cusiva':
            pantalla.style.fontStyle = ((checkTexto.checked) ? "italic" : 'normal');
            break;

        case 'subrayado':
            pantalla.style.textDecoration = ((checkTexto.checked) ? "underline" : 'none');
        default:
            break;
    }
}

function tipoFuente(fuente) {
    var pantalla = document.getElementById('pantalla');
    pantalla.style.fontFamily = fuente;
}