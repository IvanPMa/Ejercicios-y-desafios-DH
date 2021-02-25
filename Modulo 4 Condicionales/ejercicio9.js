function puedeJubilarse(edad,genero,aniosAporte){
    return estaEnEdad(edad,genero) && tieneSuficientesAportes(aniosAporte);
}

function estaEnEdad(edad,genero){
    return genero == 'M' && edad >= 65 || genero == 'F' && edad >= 60;
}

function tieneSuficientesAportes(aniosAporte){
    return aniosAporte >= 30;
}

console.log(puedeJubilarse(65,'M','35'));//true
console.log(puedeJubilarse(60,'M',30));//false
console.log(puedeJubilarse(61,'F',40));//true
console.log(puedeJubilarse(55,'F',30));//false
console.log(puedeJubilarse(62, 'F', 34));//true
