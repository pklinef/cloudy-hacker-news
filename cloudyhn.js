var max = 300;
var divisionUnit=max/10;
var scores = document.querySelectorAll(".score");
for (var i = 0; i < scores.length; i++) {
    var score = scores[i].textContent.split(' ')[0];
    scores[i].style.fontWeight = 'bold';
    scores[i].style.fontSize = '8pt';
    if (score > max) { score = max; }
    var fontUnit = Math.round(score/divisionUnit);
    var title = scores[i].parentNode.parentNode.previousElementSibling.querySelectorAll("td.title a")[0];
    title.style.fontSize = (10+(fontUnit*3)).toString()+'pt';
}
