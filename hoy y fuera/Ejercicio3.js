var dia = prompt("Ingrese un dia de la semana: ");

switch (dia.toLocaleLowerCase()) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        alert(dia + " si es laborable");

        break;
    case 'sabado':
    case 'domingo':
        alert(dia + " no es laborable");
        break;

    default:
        alert(dia + " es desconocido");
        break;
}