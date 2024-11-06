const NUM_NOTAS = 5;
var notas = new Array(NUM_NOTAS);
const valores = ["A", "B", "C", "D", "E", "F"];


for (let i = 0; i < NUM_NOTAS; i++) {
    var nota = "";

    while (!valores.includes(nota)) {
        nota = prompt("Introduzca nota de la materia " + i + ":").toLocaleUpperCase();
        notas[i] = nota;
    }
}

document.write("<tr>");

var suma = 0;   

for (let i = 0; i < NUM_NOTAS; i++) {
    switch (notas[i]) {
        case 'A':
            suma += 10;
            break;
        case 'B':
            suma += 8;
            break;

        case 'C':
            suma += 7;
            break;

        case 'E':
            suma += 6;
            break;

        case 'F':
            suma += 5;
            break;

        default:
            suma += 0
            break;
    }
}
document.write("<td>" + notas[i] + "</td>");
document.write("<td>" + (suma / NUM_NOTAS) + "</td></tr>");