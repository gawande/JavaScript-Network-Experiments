$(document).ready(function() {
  
  var nodes = [];
  var edges = [];

  var N = 100;
  var E = 500;

  for (i = 0; i < N; i++) {
    var node = {
      id: i,
      allowedToMoveX: false,
      allowedToMoveY: false,
      x: Math.floor((Math.random() * 500) ), 
      y: Math.floor((Math.random() * 500) + 100),
    };

    nodes.push(node);
  }

  for (i = 0; i < E; i++) {
    var sourceNum = Math.floor(Math.random() * N);
    var targetNum = Math.floor(Math.random() * N);
    var edge = {
      from: sourceNum,
      to: targetNum,
    };

    edges.push(edge);
  }

  var container = document.getElementById('mynetwork');
  var data= {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    height: "100%",
    width: "100%",
    smoothCurves: {
      dynamic: false,
      roundness: 0.2,
      selectable: false
    },
    clustering: false
  };
  var network = new vis.Network(container, data, options);
});
