function cantidadDeMesesConPerdida(unPeriodo){
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length ; i++){
        if (unPeriodo[i] < 0){
            cantidad = cantidad +1;
        }
    }
    return cantidad;
}

console.log(cantidadDeMesesConPerdida([100, 20, 0, -10, 10]));
console.log(cantidadDeMesesConPerdida([-100, -20, 0, -10, 10]));