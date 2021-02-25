function sumar5MonedasDe25Centavos(){
    let totalCentavos = 0;
    for (let i = 0; i < 5; i++){
        totalCentavos = totalCentavos+0.25;
    }
    return totalCentavos;
}

console.log(sumar5MonedasDe25Centavos());