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
    position: { x: x, y: y }, size: { width: 100, height: 130 },
    attrs: {
        rect: { 'stroke-width': '5', 'stroke-opacity': .7, stroke: 'black', rx: 3, ry: 3, fill: 'lightgray', 'fill-opacity': .5 },
        text: { text: 'Screen', 'font-size': 10, style: { 'text-shadow': '1px 1px 1px lightgray' } }
    }
  });
  return page;
}

function createNewButton(x, y) {
  var bt_width = 50;
  var bt_height = 30;
  var button = new joint.shapes.basic.Rect({
    //TODO: x, y座標がずれる
    position: { x: x - bt_width * 2, y: y - bt_height * 2 },
    size: { width: bt_width, height: bt_height },
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