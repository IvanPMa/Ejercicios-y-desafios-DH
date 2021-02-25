function signo(numero){
    if(numero > 0){
        return 1;
    }else if (numero == 0){
        return 0;
    }else {
        return -1;
    }
}

console.log(signo(5))
console.log(signo(0))
console.log(signo(-5))