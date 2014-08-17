function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function showTestScenarios() {
  var message = "1 test scenarios was created！\n\nTest scenario: Sample1 \n\nGiven I should see screen A\nWhen I push button\nThen I should see screen B\nWhen I push button\nThen I should see screen C";
  alert(message);
}
