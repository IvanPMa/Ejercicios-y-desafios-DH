function sumatoriaHasta(x){
    let sumatoria = 0;
    for (let  i=0; i < x; i++){
        sumatoria = sumatoria + i;
    }
    return sumatoria;
}

console.log(sumatoriaHasta(4));