function medallaSegunPuesto(puesto){
    if(puesto == 1){
        return "Oro";
    }else if( puesto == 2){
        return "Plata";
    }else if( puesto== 3){
        return "Bronce";
    }else{
        return "Seguí participando";
    }
}


console.log(medallaSegunPuesto(1));
console.log(medallaSegunPuesto(2));
console.log(medallaSegunPuesto(3));
console.log(medallaSegunPuesto(9));
let puesto =  medallaSegunPuesto(5);
console.log(puesto);