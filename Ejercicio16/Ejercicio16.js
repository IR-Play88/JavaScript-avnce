function ponerAnio() {
    var cajaanio = document.getElementById("anio");
    cajaanio.value = new Date().getFullYear();//Valor numerocp autoamtico, segun el año en el que estamos
}

/*
const esBisiesto = (anio) => {
    return (anio % 400 === 0) ? true :
            (anio % 100 === 0) ? false : anio % 4 === 0;
    };
*/

//Hace lo mismo el método esBisiesto de arriba que el método esBisiesto de abajo, el que me guste más.

function esbisiesto(anio) {
    const d = new Date(anio + "-02-29");
    return (d.getDate() == '29');
}

function muestraDias() {
    //número de dias por mes
    var anio = document.getElementById("anio").value;
    var despMeses = document.getElementById("despMeses");
    var mes = document.getElementById("despMeses").value;
    var numDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var dias = numDias[mes];
    if ((mes == 1) && (esbisiesto(anio)))
        dias = 29;
    alert(despMeses[mes].text + " tiene " + dias + " dias")
}
