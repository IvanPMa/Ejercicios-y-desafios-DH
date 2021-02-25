function factorial(numero){
    let producto = 1;
    for (let i = 1; i <= numero ; i++){
        producto = producto * i;
    }
    return producto;
}
console.log(factorial(5));