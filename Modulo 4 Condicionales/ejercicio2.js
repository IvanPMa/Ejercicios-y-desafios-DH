function sePoneLaOlla(dia){
    if(dia=="Domingo"){
        return "¡Pongamos la olla, hoy se comen pastas!";
    }
    else{

    }return "Mejor lo dejamos para el domingo";
}

console.log(sePoneLaOlla("Domingo"));

let verificar = sePoneLaOlla("Domingo") == "¡Pongamos la olla, hoy se comen pastas!";
console.log(verificar)