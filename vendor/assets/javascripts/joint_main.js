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

    // paper.on('cell:pointerclick', function(cellView, evt, x, y) {
    //   var graphScale = 2.5;
    //   var bbox = cellView.getBBox();
    //   paper.scale(graphScale, graphScale, x, y);
    // });

    paper.on('cell:pointerup', function(cellView, evt, x, y) {
      // Find the first element below that is not a link nor the dragged element itself.
      var elementBelow = graph.get('cells').find(function(cell) {
          if (cell instanceof joint.dia.Link) return false; // Not interested in links.
          if (cell.id === cellView.model.id) return false; // The same element as the dropped one.
          if (cell.getBBox().containsPoint(g.point(x, y))) {
              return true;
          }
          return false;
      });
      // If the two elements are connected already, don't
      // connect them again (this is application specific though).
      if (elementBelow && !_.contains(graph.getNeighbors(elementBelow), cellView.model)) {
          graph.addCell(new joint.dia.Link({
              source: { id: cellView.model.id }, target: { id: elementBelow.id },
              attrs: { '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z' } }
          }));
          // Move the element a bit to the side.
          cellView.model.translate(-200, 0);
      }});
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
  var button = new joint.shapes.devs.Model({
    position: { x: x, y: y },
    size: { width: bt_width, height: bt_height },
    outPorts: ['push'],
    attrs: {
        '.label': { text: 'Button', 'ref-x': .2, 'ref-y': .2 },
        rect: { fill: '#2ECC71' },
        '.outPorts circle': { fill: '#E74C3C' }
    }
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