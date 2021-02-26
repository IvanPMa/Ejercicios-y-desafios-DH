function esPremioMayor(numerosSorteados, numerosJugados){
    for (let i = 0; i < numerosJugados.length; i++){
        if (numerosSorteados.indexOf(numerosJugados[i]) == -1){
            return "Seguí participando";
        }
    }
    return "Ganaste";
}


let numerosSorteados = [ 12 , 4 , 40 , 33 , 13 , 17 ];
let numerosJugados = [ 4 , 12 ,13 , 17 , 33 , 40 ,40,40,2];
console.log(esPremioMayor(numerosSorteados, numerosJugados));