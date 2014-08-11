(function() {
  $(function(){
    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
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