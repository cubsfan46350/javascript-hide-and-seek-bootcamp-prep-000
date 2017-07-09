function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget() {
  var classAndID = document.querySelector('#nested .target');
  return classAndID;
}

function increaseRankBy(n) {
  const rankIncrease = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rankIncrease.length; i++) {
    rankIncrease[i].innerHTML = parseInt(rankIncrease[i].innerHTML) + n;
  }

}

function deepestChild() {
  var next = [];
  var deepestChild = document.querySelector('#grand-node div div div div');
  for (var i = 0; i < deepestChild.length; i++) {
    if (deepestChild[i].innerHTML = '') {
      next.push(deepestChild[i]);
      }
    }
  return deepestChild;
  }
