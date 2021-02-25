function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}
var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];
var gananciasPrimerTrimestre = [80, 453, 1000];
var gananciasPrimerCuatrimestre = [100,200,300,400]
console.log(sumatoriaGananciasSemestre(gananciasUltimoSemestre));
console.log(sumatoriaGananciasSemestre(gananciasPrimerTrimestre));
console.log(sumatoriaGananciasSemestre(gananciasPrimerCuatrimestre));