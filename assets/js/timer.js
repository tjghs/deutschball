'use strict';

class Timer {
	constructor (el) {
		this.el = el;
		this.time = 0;
		this.fullTime = 0;
		this.interval = null;
		this.running = false;

		this.reset = this.reset.bind(this);
		this.setTime = this.setTime.bind(this);
		this.start = this.start.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	reset (time) {
		this.stop();
		this.time = time || this.fullTime;
	}

	setTime (time) {
		this.fullTime = time;
	}

	start () {
		this.interval = window.setInterval(this.decrement.bind(this), 1000);
		this.running = true;
	}

	decrement () {
		this.time--;
		this.el.innerText = this.prettyPrint(this.time);
		if (this.time === 0)
			this.stop();
	}

	prettyPrint(time) {
		return `${Math.floor(time / 60)}:${(time % 60 < 10) ? '0' + time % 60: time % 60}`;
	}

	stop () {
		window.clearInterval(this.interval);
		this.running = false;
	}

}


