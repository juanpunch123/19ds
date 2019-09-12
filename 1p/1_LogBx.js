function loga(x, y){
    return Math.log(x) / Math.log(y);
}

function logBaseX(base){
    for(c=1;c<=10;c++){
        console.log(loga(c, base))
    }
}