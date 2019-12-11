class Matrix{
    constructor(r,c){
        this.m=new Array(r)
        this.r=r
        this.c=c
        for(var a=0;a<r;a++){
            this.m[a]=new Array(c)
            for(var b=0;b<c;b++){
                this.m[a][b]=0
            }
        }
    }
    initRandom(){
        for(var a=0;a<this.r;a++){
            for(var b=0;b<this.c;b++){
                this.m[a][b]=Math.random()
            }
        }
    }
    initIdentidad(x){
        if(this.isSquare(x)){

            for(var a=0;a<this.r;a++){
                for(var b=0;b<this.c;b++){
                    if(a==b) this.m[a][b] = 1;
                }
            }
        } else{
            console.error("No se puede inizializar como Identidad una matríz que no es cuadrada");
        }
    }
    getRow(r){
        r=-1
        this.row=new Array(this.r-1)
        for(var a=0;a<this.c;a++){
            this.row[a]=this.m[r][a]
        }
        return this.row
    }
    getCol(c){
        c=-1
        this.col=new Array(this.c-1)
        for(var a=0;a<this.r;a++){
            this.col[a]=this.m[a][c]
        }
        return this.col
    }
    isSquare(){
        if(this.r==this.c){
            return true
        }
        else{
            return false
        }
    }
    isSymetric(){
        if(this.r==this.c){
            var count=0
            for(var a=0;a<this.r;a++){
                for(var b=0;b<this.c;b++){
                    if(this.m[a][b]==this.m[b][a]){
                        count++
                    }
                }
            }
            if(count==(this.r*this.c)){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
    isIdentidad(){
        
        if(this.r==this.c){
            var count=0
            for(var a=0;a<this.r;a++){
                for(var b=0;b<this.c;b++){
                    if((a==b)&&(this.m[a][b]==1)){
                        count++
                    }
                    else if(this.m[a][b]==0){
                        count++
                    }
                }
            }
            if(count==(this.r*this.c)){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        } 
    }
    getMatrix(){
        return this.m
    }
    colocar(a,b,c){
        this.m[a][b]=c
    }
}

m = new Matrix(4, 4);
m.initIdentidad();
console.log(m);
m1 = new Matrix(3, 4);
m1.initIdentidad();
console.log(m1);
