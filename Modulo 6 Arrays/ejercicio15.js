function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if (unPeriodo[i] > 0){
        cantidad=cantidad+1;
        }     
    }
    return cantidad;
  }
  
  console.log(cantidadDeMesesConGanancia([]));
  console.log(cantidadDeMesesConGanancia([10,20,30,-20]));
  console.log(cantidadDeMesesConGanancia([]));