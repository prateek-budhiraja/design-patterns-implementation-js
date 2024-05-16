const TYPE = {
	DEVELOPER: "Developer",
	TESTER: "Tester",
};

function Developer(name) {
	this.name = name;
	this.type = TYPE.DEVELOPER;
}

function Tester(name) {
	this.name = name;
	this.type = TYPE.TESTER;
}

function EmployeeFactory() {
	this.create = (name, type) => {
		switch (type) {
			case 1:
				return new Developer(name);
			case 2:
				return new Tester(name);
		}
	};
}

const employeeFactory = new EmployeeFactory();

const employees = [];
employees.push(employeeFactory.create("Prateek", 1));
employees.push(employeeFactory.create("Rahul", 2));

function say() {
	console.log(`Hi, I am ${this.name}, and I am a ${this.type}!`);
}

employees.forEach((emp) => say.call(emp));
