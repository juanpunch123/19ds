class node{
    constructor(data){
        this.data = data;
    }
}

class Graph {
    constructor(nodeA){
        this.matrix = [[0]];
        this.nodos = [];
        this.nodos.push(nodeA);
        }
    addVertex(node){
        this.nodos.push(node);
        this.matrix.push([0]);
        for(let x = 0; x<this.nodos.length; x++) this.matrix[x].push(0);
        for(let x = 0; x< (this.nodos.length-2) ; x++) this.matrix[(this.nodos.length-1)].push(0);
    }
    addEdge(v1,v2){
        this.matrix[v1][v2]++;
        this.matrix[v2][v1]++;
    }
    printGraph(){
        let letters = []; //String.fromcharCode imprime codigo ascii
        for(let x = 0; x < this.nodos.length; x++)letters.push(String.fromCharCode(65+x));
        console.log("__  "+letters);
        for(let x = 0; x < this.nodos.length; x++){
                console.log(String.fromCharCode(x+65) +" | "+this.matrix[x] + " |")
            }
    }
    isComplete(){
        for(let x1 = 0; x1 < this.nodos.length; x1++){
            if(this.matrix[x1][x1]>0) return false; //Comprueba diagonal
            for(let x2 = 0; x2 < this.nodos.length; x2++){
                if(x1==x2);else if(this.matrix[x1][x2]!= 1) return false; //else if elimina comp de diagonal
            }
        }
        return true;
    }
    isMultigraph(){ 
        for(let x1 = 0; x1 < this.nodos.length; x1++){
            if(this.matrix[x1][x1]>0) return true; //Comprueba diagonal, contrario a isCOMPLETE()
            for(let x2 = 0; x2 < this.nodos.length; x2++){
                if(x1==x2);else if(this.matrix[x1][x2]> 1) return true; //else if elimina comp de diagonal
            }
        }
        return false;
    }
    isSubgraph(g){
        if(this.matrix.length == g.matrix.length){
            for(let x1 = 0; x1 < this.nodos.length; x1++){
                for(let x2 = 0; x2 < this.nodos.length; x2++){
                    if(this.matrix[x1][x2] != g.matrix[x1][x2]) return false; //Comprueba 1v1 de graphA y graphB
                }
            } return true;
        }else return false;
    }

    isDigraph(){
        let isD=true
        for(var i=0;i<this.matrix.length; i++){
            for(var b=0;b<this.matrix[i].nodos.length;b++){
                each(this.matrix,this.matrix[i].nodos[b],this.matrix[i].d)
            }
        }
        function each(graph,data,value){
            for(var c=0;c<graph.length;c++){
                if(data==graph[c].d){

                    for(var de=0;de<graph[c].nodos.length;de++){

                        if(graph[c].nodos[de]==value){
                            isD=false
                            
                        }

                    }
                }
            }
            return
        }
        return isD
    }
}


//test

let nodo0 = new node("nodo0");
let nodo1 = new node("nodo1");
let nodo2 = new node("nodo2");
//let nodo3 = new node("nodo3");
//let nodo4 = new node("nodo4");
//let nodo5 = new node("nodo5");
let graph = new Graph(nodo0);
graph.addVertex(nodo1);
graph.addVertex(nodo2);
//graph.addVertex(nodo3);
//graph.addVertex(nodo4);
//graph.addVertex(nodo5);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,2);
//graph.addEdge(2,4);
//graph.addEdge(0,5);
//graph.addEdge(4,3);
graph.printGraph();
graph.isDigraph();