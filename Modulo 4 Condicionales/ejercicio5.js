function puedoIrAlBanco(diaDeLaSemana,horaActual){
    return diaDeLaSemana != "Sábado" && diaDeLaSemana != "Domingo" && horaActual >= 10 && horaActual <= 15;
}
console.log(puedoIrAlBanco('Lunes', 11));
// true, dado que es un día laboral y está dentro del horario de atención de los bancos (entre las 10 y las 15).
console.log(puedoIrAlBanco('Martes', 18));
// false, dado que es un día laboral pero no está dentro del horario de atención de los bancos (entre las 10 y las 15).
console.log(puedoIrAlBanco('Sábado', 14));