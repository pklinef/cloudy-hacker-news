var max = 300;
var divisionUnit = max / 10;
var scores = document.querySelectorAll(".score");
var titles = document.querySelectorAll(".storylink");
for (var i = 0; i < scores.length; i++) {
    var score = parseInt(scores[i].textContent.split(/\s/)[0]);
    scores[i].style.fontWeight = 'bold';
    scores[i].style.fontSize = '8pt';
    if (score > max) {
        score = max;
    }
    var fontUnit = Math.round(score/divisionUnit);
    titles[i].style.fontSize = (10+(fontUnit*3)).toString()+'pt';
}
