function laClaveSecreta(caracteres){    
    let caractereSinSignos =[];
    //Quitar astericos
    for (let i = 0; i < caracteres.length; i++){
        if(caracteres[i] != "*"){
            caractereSinSignos.push(caracteres[i]);
        }
    }

    //Voltear la cadena y concatenar
    let cadena ="";
    for (let i = caractereSinSignos.length-1; i >= 0; i--){
        cadena = cadena + caractereSinSignos[i];
    }
    return cadena;
}

console.log(laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] ));
console.log(laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ));