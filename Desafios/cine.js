function asientosDisponibles (asientos, numeroAsiento){
    let disponible = asientos.indexOf(numeroAsiento);
    if (disponible != -1){ 
        return "Felicitaciones, el asiento número "+numeroAsiento+" está disponible";
    }
    else{
        return "Lo sentimos, el asiento número "+numeroAsiento+" está ocupado, pero aún quedan "
        +asientos.length+" asientos disponibles";
    }
}
// Felicitaciones, el asiento número 15 está disponible
//"Felicitaciones, el asiento número 15 está disponible"

console.log(asientosDisponibles([15, 28, 44, 45, 70], 44));
console.log(asientosDisponibles([15, 28, 44, 45, 70], 51));

//"Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"
// Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles