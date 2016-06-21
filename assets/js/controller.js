/*globals Timer*/
'use strict';


function parse(val) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split('&')
        .forEach(function (item) {
        tmp = item.split('=');
        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    });
    return result;
}


window.onload = function() {

	if (parse('game') === 'true') {
		console.log('hi');

		document.body.innerHTML = `
			<h1 class="title"><a href="./">Deutschball</a></h1>
			<div class="game-container">
				<div class="score left">
					<div class="score-number">
						0
					</div>
					<div class="score-team">
						Team 1
					</div>
				</div>
				<div class="score right">
					<div class="score-number">
						0
					</div>
					<div class="score-team">
						Team 2
					</div>
				</div>
				<div class="time-container">
					<div class="time">Play!</div>
				</div>
			</div>`;
		var team1 = parse('team1') || 'Team 1';
		var team2 = parse('team2') || 'Team 2';
		var time = parse('time') || 300;

		var score1, score2;
		score1 = score2 = 0;

		document.querySelector('.score.left > .score-team').innerText = team1;
		document.querySelector('.score.right > .score-team').innerText = team2;

		var timerDiv = document.querySelector('.time');
		var timer = new Timer(timerDiv);

		timer.setTime(time);
		timer.reset();
		timer.start();

		document.querySelector('.score.left').addEventListener('click', function() {
			if (!timer.running)
				return;
			score1++;
			this.querySelector('.score-number').innerText = score1;
		});
		document.querySelector('.score.right').addEventListener('click', function() {
			if (!timer.running)
				return;
			score2++;
			this.querySelector('.score-number').innerText = score2;
		});
	}

	
};