class Graph {
    constructor() {
      this.adjList = [];
    }
  
    addNode(node) {
      if (!this.adjList[node]) {
        this.adjList[node] = [];
      }
    }
  
    addEdge(startNode, endNode) {
      this.adjList[startNode].push(endNode);
    }
}
function depthFirstSearch(graph, startNode, targetNode) {
    // console.log(graph)
    const stack = [startNode];
    const visited = new Set();
    const paths = {};
    paths[startNode] = [startNode];
    
    if(targetNode === startNode) {
        return paths[startNode];
    }
    while (stack.length > 0) {
      const vertex = stack.pop();
      visited.add(vertex);
        for (const neighbor of graph.adjList[vertex]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
            paths[neighbor] = paths[vertex].concat(neighbor);
            if (neighbor === targetNode) {
              return paths[neighbor];
            }
          }
        }
    }
    return []
}
function augmentingPath(graph, start, end) {
    // const nodes = new Set(Object.keys(graph));
    const adjList = new Graph();
    for(const node in graph) {
        adjList.addNode(node);// add node to adjList
        for(const siblings in graph[node]) {
            adjList.addEdge(node, siblings);
        }
    }
    return depthFirstSearch(adjList, start, end);
}

// Get help from TA
// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
