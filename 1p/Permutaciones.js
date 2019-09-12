function fact(num){
    let total=1;

    for(i=1;i<=num;i++){
        total*=i;
    }
    return total;
}

var n=8,r=5; 
nr=n-r;
permutacion=(fact(n))/(fact(nr));
console.log(permutacion);