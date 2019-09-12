n = 10;
sum = 0;
for(c=1;c<=n;c++){
    sum = sum + (Math.pow(c,2));
}
form = (n*(n+1)*((2*n) +1))/6
console.log("Resultado sumatoria = " + sum);
console.log("Resultado formula = " + form)