function sumaDeLosParesDel0Al(x){
    let sumaDeLosPares = 0;
    for (let i = 0; i <= x; i++){
        if (i%2 == 0){
            sumaDeLosPares = sumaDeLosPares + i;
        }
    }
    return sumaDeLosPares;
}

console.log(sumaDeLosParesDel0Al(10));
