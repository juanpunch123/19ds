class Vector
{
    constructor(array0)
    {
        this._array0 = array0;
    }
    get array0()
    {
        return this._array0;
    }
    set array0(array0)
    {
        this._array0 = array0;
    }
    suma(array1)
    {
        let sum=[]
        if(array1.length != this._array0.length)
        {
            console.log("El array no es de la misma longitud")
        }
        else
        {
            for(let i = 0; i < array1.length; i++)
            {
                sum[i] = this._array0[i] + array1[i];
            }
            return sum;
        }
    }
    resta(array1)
    {
        let rest = []
        if(array1.length != this._array0.length)
        {
            console.log("El array no es de la misma longitud")
        }
        else
        {
            for(let i = 0; i < array1.length; i++)
            {
                rest[i] = this._array0[i] - array1[i];
            }
            return rest;
        }
    }
    multi(array1)
    {
        let mult = []
        if(array1.length != this._array0.length)
        {
            console.log("El array no es de la misma longitud")
        }
        else
       { 
            for(let i = 0; i < array1.length; i++)
            {
                mult[i] = this._array0[i] * array1[i];
            }
            return mult;
        }
    }
} 
const array0 = new Vector([4, 5, 6, 7, 8])
