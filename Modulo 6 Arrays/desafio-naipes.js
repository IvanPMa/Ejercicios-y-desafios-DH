function naipes(palo){
    let palos = [];
    if (palo == "oros" || palo =="espadas" || palo == "copas" || palo == "bastos"){
        for (let i = 1; i<=12 ; i++) {
            if(i != 8 && i != 9){
                palos.push(i+" de "+palo);
            }
        }
    }
    return palos;
}
console.log(naipes("espadas"));
console.log(naipes("oros"));
console.log(naipes("copas"));
console.log(naipes("bastos"));
console.log(naipes("damas"));
