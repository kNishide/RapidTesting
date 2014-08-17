function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function showTestScenarios() {
  var message = "Test scenario: 画面遷移テストサンプル \nGiven スクリーンAが表示されている\nWhen ボタンを押す\nThen スクリーンBが表示されている\nWhen ボタンを押す\nThen スクリーンCが表示されている\nWhen ボタンを押す";
  alert(message);
}