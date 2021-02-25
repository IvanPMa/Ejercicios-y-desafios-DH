function  sumarMonedasDe25(cantidadDeMonedas){
    let totalDeCentavos = 0;
    for (let i = 0; i < cantidadDeMonedas; i++){
        totalDeCentavos = totalDeCentavos + 0.25;
    }
    return totalDeCentavos;
}

console.log(sumarMonedasDe25(7));