/* 
   Implementing Graphs using hashMaps
*/

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.list = {};
  }
  addEdge(source, destination) {
    // A -> B
    if (this.list[source]) this.list[source].push(destination);
    else this.list[source] = [destination];

    // B -> A
    if (this.list[destination]) this.list[destination].push(source);
    else this.list[destination] = [source];
  }
}

let movies = new Graph(['a', 'b', 'c', 'd', 'e']);
movies.addEdge('a', 'b');
movies.addEdge('b', 'c');
movies.addEdge('a', 'c');
movies.addEdge('b', 'd');
movies.addEdge('d', 'e');
movies.addEdge('d', 'a');
console.log(movies);
