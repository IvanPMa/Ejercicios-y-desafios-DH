function contiene(array,numero){
    return array.indexOf(numero) != -1;
}


console.log(contiene([1, 6, 7, 6], 7));
console.log(contiene([1, 6, 7, 6], 6));
console.log(contiene([], 7));