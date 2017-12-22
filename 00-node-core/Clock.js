'use strict';

class Clock
{
	constructor()
	{
		setInterval(() => this.theTime(), 1000);
	};

	theTime () {
		let date = new Date(),
			hour = date.toLocaleString();

		return console.log(hour);
	};
}

module.exports = Clock;