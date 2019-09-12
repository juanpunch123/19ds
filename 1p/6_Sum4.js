n = 10;
sum = 0;
k = 2;
for(c=1;c<=n;c++){
    sum = sum + (Math.pow(c,k));
}
form = (1/(k+1))*(Math.pow(n,(k+1)));
console.log("Resultado sumatoria = " + sum);
console.log("Resultado formula = " + form)