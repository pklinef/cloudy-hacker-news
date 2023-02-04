var max = 300;
var divisionUnit = max / 10;
var subtexts = document.querySelectorAll(".subtext");
var titles = document.querySelectorAll(".titleline");
for (var i = 0; i < subtexts.length; i++) {
    var scoreEl = subtexts[i].querySelector(".score");
    if (!scoreEl) {
       continue;
    }
    scoreEl.style.fontWeight = 'bold';
    scoreEl.style.fontSize = '8pt';
    var score = Math.min(parseInt(scoreEl.textContent.split(/\s/)[0]), max);
    var fontUnit = Math.round(score/divisionUnit);
    titles[i].style.fontSize = (10+(fontUnit*3)).toString()+'pt';
}
