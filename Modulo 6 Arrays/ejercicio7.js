function trasladar(unArrary,otroArray){
    let elemento = unArrary.pop();
    otroArray.push(elemento);
}
let unArray = [1, 2, 3];
let otroArray = [4, 5];

trasladar(unArray, otroArray);

console.log(unArray);
console.log(otroArray);

