class Node {
  constructor(val, isRoot = false) {
    this.value = val;
    this.children = [];
    this.isRoot = isRoot;
  }
}

function getSubTreeSize(node, cb) {
  let total = 1;
  for (let child of node.children) {
    total += getSubTreeSize(child, cb);
  }
  return cb(node, total);
}

/*
 * returns array of nodes, with the root being in pos 0.
 */
function initNodes(input) {
  let lines = input.split('\n');
  let edges = lines.map(l => {
    l = l.trim();
    return l.split(' ');
  });
  edges = edges.slice(1); // Don't care about first line (no. of nodes + edges)
  let nodes = [new Node(1, true)];
  for (let edge of edges) {
    let node = new Node(+edge[0]);
    let parent = nodes.find(n => n.value === +edge[1]);
    parent.children.push(node);
    nodes.push(node);
  }
  return nodes;
}

function evenTree(input) {
  let nodes = initNodes(input);
  let removedEdges = 0;
  let size = getSubTreeSize(nodes[0], (node, size) => {
    if (size % 2 === 0 && !node.isRoot) {
      removedEdges++;
      return 0;
    }
    return size;
  });
  return removedEdges;
}


function run() {
  let data = `10 9
  2 1
  3 1
  4 3
  5 2
  6 1
  7 2
  8 6
  9 8
  10 8`;
  evenTree(data);
}

export default run;
