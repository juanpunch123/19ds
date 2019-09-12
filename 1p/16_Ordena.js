//ordena valores

//Si NO hay valores iguales
var array = [9, 1, 18, 14, 3]
var array2 = [9, 1, 18, 14, 3]
console.log(array)
for(c = 0 ; c<array.length ; c++){
    var menores = 0;
    for(c2= 0; c2<array.length; c2++){
       if(array[c]>array[c2])menores++
    }
     array2[menores] = array[c];
}
console.log(array2)



//Si hay valores iguales 
var array = [9, 1, 1, 14, 3]
var array2 = [9, 1, 1, 14, 3]
console.log(array)
for(c = 0 ; c<array.length ; c++){
    var menores = 0;
    var iguales = -1;
    for(c2= 0; c2<array.length; c2++){
       if(array[c]>array[c2])menores++
       if(array[c]==array[c2])iguales++
    }
    if(iguales != 0){
        for(i = iguales; i !=0; i--){
            array2[(menores+i)] = array[c];
        }
    }
    array2[menores] = array[c];
}
console.log(array2)