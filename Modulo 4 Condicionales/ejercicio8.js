//Numero es positivo , multiplo de 2 o 3 ese numero no es 15
function esNumeroDeLaSuerte(numero){
    return numero > 0 && (numero % 2 == 0 || numero % 3 == 0) && numero != 15;
}

console.log(esNumeroDeLaSuerte(2));
console.log(esNumeroDeLaSuerte(-5));
console.log(esNumeroDeLaSuerte(9));
console.log(esNumeroDeLaSuerte(15));
console.log(esNumeroDeLaSuerte(11));
console.log(esNumeroDeLaSuerte(10));
