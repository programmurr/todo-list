const Observer = () => {
	const observers = [];

	function addObserver(newObserver) {
		observers.push(newObserver);
	}

	function notifyObservers() {
		observers.forEach(function(observer) {
			observer.update(observer);
		});
	}

	return { observers, addObserver, notifyObservers };
};

export default Observer;
