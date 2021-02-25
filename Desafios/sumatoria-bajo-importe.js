function sumatoriaBajoImporte(importes){
    let sumatoria = 0;
    for (let i = 0; i < importes.length; i++){
        if (importes[i] > 0 && importes[i] <= 1000){
            sumatoria = sumatoria + importes[i];
        }
    }
    return sumatoria;
}
console.log(sumatoriaBajoImporte([10,25,50,-21]));
console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));