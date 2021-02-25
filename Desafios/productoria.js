function productoria(numeros){
    producto = 1;
    for (let i = 0; i < numeros.length; i++){
        producto = producto * numeros[i];
    }
    return producto;
}

console.log(productoria([1, 4, 7]) );