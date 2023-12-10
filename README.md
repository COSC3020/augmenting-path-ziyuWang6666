[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12590819&assignment_repo_type=AssignmentRepo)
# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

#### Answer: The total worst case time complexity is O(V + E), where V is the number of vertices and E is the number of edges.

1. The depthFirstSearch method starts with the start node as the first visited element and then uses a loop to explore the node's neighbor vertices. If the visited list does not include the neighbor vertice, then push it onto the stack and then add it to the path. Return the path until the target node is reached. The worst case could reach O(V + E), where V is the number of vertices and E is the number of edges.

2. The augmenting path operation creates a new graph by iterating each vertice and neighboring vertices in the original graph, which leads to the worst time complexity of O(V+E), where V is the number of vertices and E is the number of edges in the original graph.

Combining the upper steps together, the overall time complexity can be represented as O(V + E).

