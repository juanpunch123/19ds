function fact(fa){
    let res = 1;
    for(let i = 1 ; i <= fa ; i++){
        res = res * i;
    }
    return(res);
}

// e^x = 1 + x + x^2/2! + x^3/3!...   10 term
function eala(x){
    let res = 1;
    for(let i = 1 ; i <= 10 ; i++){
        res = res + Math.pow(x,i)/fact(i)
    }
    return (res);

}