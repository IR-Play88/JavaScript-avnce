const NUM_NOTAS = 5; // Número de notas a ingresar
var notas = new Array(NUM_NOTAS); // Array para almacenar las notas
const valores = ["A", "B", "C", "D", "E", "F"]; // Notas válidas

// Ciclo para ingresar las notas
for (let i = 0; i < NUM_NOTAS; i++) {
    var nota = "";

    // Validación de la nota ingresada
    while (!valores.includes(nota)) {
        nota = prompt("Introduzca nota de la materia " + (i + 1) + ":").toUpperCase();
    }
    notas[i] = nota; // Almacena la nota en el array
}

// Inicializa el acumulador de suma
var suma = 0; 
// Genera la fila de la tabla
document.write("<tr>");

// Calcula la suma de los valores de las notas
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
        case 'D':
            suma += 6; // Se incluyó la nota 'D'
            break;
        case 'E':
            suma += 5;
            break;
        case 'F':
            suma += 4; // Se ajustó el valor de 'F'
            break;
        default:
            suma += 0;
            break;
    }
    // Escribe la nota en la tabla
    document.write("<td>" + notas[i] + "</td>");
}

// Calcula y muestra el promedio
var promedio = (suma / NUM_NOTAS).toFixed(2); // Calcula el promedio y lo redondea a 2 decimales
document.write("<td>" + promedio + "</td></tr>"); // Escribe el promedio en la tabla
