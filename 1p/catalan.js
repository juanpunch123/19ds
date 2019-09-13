function fact(fac){
    let rest = 1;
    for(let i = 1 ; i <= fac ; i++){
        rest = rest * i;
    }
    return(rest);
}

function catalan(n){
    return fact(n*2)/(fact(n+1)*fact(n))
}