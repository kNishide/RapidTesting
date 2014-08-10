(function() {
  $(function(){
    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
      el: $('#myholder'),
      width: $(window).width(),
      height: 1000,
      model: graph,
      gridSize: 1
    });

    paper.on('blank:pointerdblclick', function(evt, x, y) {
      var rect = createNewPage(x, y);
      graph.addCells([rect]);
    })
  });
})();

function createNewPage(x, y) {
  var rect = new joint.shapes.basic.Rect({
    position: { x: x, y: y },
    size: { width: 100, height: 130 },
    attrs: { rect: { fill: 'gray' }, text: { text: 'Page', fill: 'white' } }
  });

  rect.on('change:position', function(element) {
    console.log(element.id, ':', element.get('position'));
  });

  return rect;
}