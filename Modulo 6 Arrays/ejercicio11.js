function medallaSegunPuesto(puesto){
    var medallas = ["Oro","Plata","Bronce"];
    if(medallas[puesto-1] != undefined){
        return medallas[puesto-1];
    }else{
        return "Seguí participando";
    }
}


console.log(medallaSegunPuesto(1));
console.log(medallaSegunPuesto(2));
console.log(medallaSegunPuesto(3));
console.log(medallaSegunPuesto(4));
console.log(medallaSegunPuesto(5));