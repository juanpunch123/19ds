function initRandom(s,j)
{
    var Matriz = new Array(s);
    for (i=0; i<j; i++)
    {
        Matriz[i]= new Array(j)
    }
    for (a = 0; a < s; a++)
    {
        for (b = 0; b < j; b++)
        {
            Matriz[a][b] = Math.random();
        }
    }
    return Matriz
}
console.log(initRandom(8,8))