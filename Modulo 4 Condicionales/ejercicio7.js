function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
    return !seCobraInteres  && cuotasTarjeta >=3  || efectivoDisponible < 100;
 }

 console.log(pagoConTarjeta(true,6,123));
 console.log(pagoConTarjeta(true,9,50));
 console.log(pagoConTarjeta(true,7,38));
 console.log(pagoConTarjeta(true,6,98));
 