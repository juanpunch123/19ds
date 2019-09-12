function fact(fa){
    let res = 1;
    for(let i = 1 ; i <= fa ; i++){
        res = res * i;
    }
    return(res);
}


//cos x = x - x^3/3! + x^5/5!
function cosx(x){
    let res = 1;
    console.log(res)
    for(let i = 2 ; i <= 10 ; i=i+4){
        res = res - Math.pow(x,i)/fact(i)
    }
    for(let i = 4 ; i <= 8 ; i=i+4){
        res = res + Math.pow(x,i)/fact(i)
    }
    return(res)
}