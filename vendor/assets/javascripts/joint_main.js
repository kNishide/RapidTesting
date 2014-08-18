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
      gridSize: 1,
      defaultLink: new joint.dia.Link({
        attrs: { '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' } }
      }),
      validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
        // Prevent loop linking
        return (magnetS !== magnetT);
      },
      // Enable link snapping within 75px lookup radius
      snapLinks: { radius: 75 }
    });

    paper.on('blank:pointerdblclick', function(evt, x, y) {
      addNewPage(x, y);
    })

    // paper.on('cell:pointerclick', function(cellView, evt, x, y) {
    //   var graphScale = 2.5;
    //   var bbox = cellView.getBBox();
    //   paper.scale(graphScale, graphScale, x, y);
    // });

    // First, unembed the cell that has just been grabbed by the user.
    paper.on('cell:pointerdown', function(cellView, evt, x, y) {

        var cell = cellView.model;

        if (!cell.get('embeds') || cell.get('embeds').length === 0) {
            // Show the dragged element above all the other cells (except when the
            // element is a parent).
            cell.toFront();
        }

        if (cell.get('parent')) {
            graph.getCell(cell.get('parent')).unembed(cell);
        }
    });


    paper.on('cell:pointerup', function(cellView, evt, x, y) {
      // Find the first element below that is not a link nor the dragged element itself.
      var cell = cellView.model;
      if (cell instanceof joint.dia.Link) return false;

      var cellViewsBelow = paper.findViewsFromPoint(cell.getBBox().center());

      if (cellViewsBelow.length) {
          // Note that the findViewsFromPoint() returns the view for the `cell` itself.
          var cellViewBelow = _.find(cellViewsBelow, function(c) { return c.model.id !== cell.id });

          // Prevent recursive embedding.
          if (cellViewBelow && cellViewBelow.model.get('parent') !== cell.id) {
              cellViewBelow.model.embed(cell);
          }
      }
    });
  })
})();

function addNewPage(x, y) {
  var page = createNewPage(x, y);
  graph.addCells([page]);
}

function createNewPage(x, y) {
  var page = new joint.shapes.basic.Rect({
    position: { x: x, y: y }, size: { width: 100, height: 130 },
    attrs: {
        rect: { 'stroke-width': '5', 'stroke-opacity': .7, stroke: 'black', rx: 3, ry: 3, fill: 'lightgray', 'fill-opacity': .5 },
        text: { text: 'Screen', 'font-size': 10, style: { 'text-shadow': '1px 1px 1px lightgray' } }
    }
  });
  page.toBack();
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
        '.outPorts circle': { fill: '#E74C3C', type: 'output' }
    }
  });
  //printProperties(button);
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
  var offsetX = 100;
  var offsetY = 70;
  var page = createNewButton(event.clientX - offsetX, event.clientY - offsetY);
  console.debug(event);
  graph.addCells([page]);
}
function onDragOver(event) {
  event.preventDefault();
}
function onDragEnter(event) {
}
function onDragLeave(event) {
}

/*
 *  Utility
 */

function printProperties(obj) {
    var properties = '';
    for (var prop in obj){
        properties += prop + "=" + obj[prop] + "\n";
    }
    console.debug(properties);
}