/*
function libra() {
    var valor = document.getElementById("valor").value;
    document.getElementById("resultado").value = valor * 0.91;

}

function yenes() {
    var valor = document.getElementById("valor").value;
    document.getElementById("resultado").value = valor * 124.05;
}

function dolar() {
    var valor = document.getElementById("valor").value;
    document.getElementById("resultado").value = valor * 1.18;
}
*/

//Lo poedemos hacer de uno en uno o mejor en todo en uno, asi no repetimso código

const LIBRA = 0.91;
const DOLAR = 1.18;
const YEN = 124.05;

const FOTO_LIBRA ='imagen/libra.png';
const FOTO_DOLAR = 'imagen/dolar.png';
const FOTO_YEN = 'imagen/yen.png';

function convertir(moneda) {
    var valor = document.getElementById("valor").value;
    var valorCambio = 0;
    var bandera = "imagens/blanco";
    switch (moneda) {
        case 'libra':
            valorCambio = LIBRA;
            bandera = FOTO_LIBRA;
            break;
        case 'dolar':
            valorCambio = DOLAR;
            bandera = FOTO_DOLAR;
            break;
        case 'yen':
            valorCambio = YEN;
            bandera = FOTO_YEN;
            break;

        default:
            break;
    }

    document.getElementById("resultado").value = valor * valorCambio;
    document.getElementById("imagen").src = bandera;
}