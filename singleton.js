const Singleton = (() => {
	function ProcessManager() {
		this.noOfProcesses = 0;
	}

	let pManager;

	const createProcessManager = () => {
		pManager = new ProcessManager();
		return pManager;
	};

	return {
		getProcessManager: () => {
			if (!pManager) pManager = createProcessManager();
			return pManager;
		},
	};
})();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);
