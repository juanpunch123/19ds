function sort(array){
    let numerico = false;
        for (let j = 0; j < array.length; j++) {
            let element = array[j];
            if(!isNaN(element)) {
                numerico = true;
            }
            else{
                numerico = false;
                break;
            }
        }
        if (numerico == true) {
            for(i=0; i < array.length-1; i++){
                for(s = i+1; s < array.length; s++){
                        if(array[i] > array[s]){
                            aux = array[i];
                            array[i] = array[s];
                            array[s] = aux;

                        }
                 }
            }
        console.log(array)
        }
        else{
            console.error("Sólo se permiten valores numericos en el array");
        }
}



let array=[3, 5, 8, 1, 2];
sort(array);
