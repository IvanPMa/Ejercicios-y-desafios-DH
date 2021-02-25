function puedeSubirse(alturaPersona,vieneConCompania,tieneAfeccionCardiaca){
    return (alturaPersona >= 1.5 || alturaPersona>= 1.2 && vieneConCompania ==true) && !tieneAfeccionCardiaca;
}

console.log(puedeSubirse(1.7, false, true));//false
console.log(puedeSubirse(1.5,false,false)); //true
console.log(puedeSubirse(1.2,false,false));
console.log(puedeSubirse(1.2,true,false));
console.log(puedeSubirse(1.1,true,false));