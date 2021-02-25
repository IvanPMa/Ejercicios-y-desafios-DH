function caloriasDeTrote(x){
    let totalCalorias = 0;
    for (let i = 0; i <= x; i++){
        totalCalorias = totalCalorias +(i * 5);
    }
    return totalCalorias;
}

console.log(caloriasDeTrote(2));
console.log(caloriasDeTrote(1));
