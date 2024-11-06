let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");

let confirma = confirm("Es usted " + apellido + "," + nombre + " ?");

if (confirma) {
    alert("Usted es: " + apellido +  "," + nombre);
}else{
    alert("usted no es: " + apellido +  "," + nombre );
}