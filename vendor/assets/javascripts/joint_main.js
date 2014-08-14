var graph;
var paper;

(function() {
  $(function(){
    graph = new joint.dia.Graph;
    paper = new joint.dia.Paper({
      el: $('#myholder'),
      width: $(window).width(),
      height: $(window).height(),
      model: graph,
      gridSize: 1
    });

    paper.on('blank:pointerdblclick', function(evt, x, y) {
      var page = createNewPage(x, y);
      graph.addCells([page]);
    })

    paper.on('cell:pointerclick', function(cellView, evt, x, y) {
      var graphScale = 2.5;
      var bbox = cellView.getBBox();
      paper.scale(graphScale, graphScale, x, y);
    });
  });
})();

function createNewPage(x, y) {
  var page = new joint.shapes.basic.Rect({
    position: { x: x, y: y },
    size: { width: 100, height: 130 },
    attrs: { rect: { fill: 'gray' }, text: { text: 'Page', fill: 'white' } }
  });
  return page;
}

function createNewButton(x, y) {
  var button = new joint.shapes.basic.Rect({
    position: { x: x, y: y },
    size: { width: 50, height: 30 },
    attrs: { rect: { fill: 'blue' }, text: { text: 'Button', fill: 'white' } }
  });
  return button;
}

/*
 *  Event
 */

function onDragStart(event) {
  console.trace();
  event.dataTransfer.setData("text", event.target.id);
}
function onDrop(event) {
  var id = event.dataTransfer.getData("text");
  var elm = document.getElementById(id);
  event.preventDefault();

  var page = createNewButton(event.clientX, event.clientY);
  graph.addCells([page]);
}
function onDragOver(event) {
  event.preventDefault();
}
function onDragEnter(event) {
}
function onDragLeave(event) {
}