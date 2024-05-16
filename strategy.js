function Air() {
	this.getDetails = (source, destination) => {
		// calculate
		return {
			medium: "air",
			time: "0.5h",
		};
	};
}

function Foot() {
	this.getDetails = (source, destination) => {
		// calculate
		return {
			medium: "walk",
			time: "2.5hr",
		};
	};
}

function Bus() {
	this.getDetails = (source, destination) => {
		// calculate
		return {
			medium: "bus",
			time: "1.4hr",
		};
	};
}

function Car() {
	this.getDetails = (source, destination) => {
		// calculate
		return {
			medium: "car",
			time: "1hr",
		};
	};
}

function Mode() {
	this.setMode = (mode) => {
		this.mode = mode;
	};

	this.getDetails = (source, destination) => {
		return this.mode.getDetails(source, destination);
	};
}

const air = new Air();
const foot = new Foot();

const mode = new Mode();

mode.setMode(air);
console.log(mode.getDetails("Pune", "Banglore"));

mode.setMode(foot);
console.log(mode.getDetails("Pune", "Banglore"));
