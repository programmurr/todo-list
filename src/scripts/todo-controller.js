import Todo from './todo';

class TodoController {
	constructor() {}

	static _allTodos = [];

	static getAllTodos() {
		return this._allTodos;
	}

	static pushNewTodo(_msg, array) {
		const newTodo = new Todo(array[0], array[1], array[2], array[3]);
		this._allTodos.push(newTodo);
	}
}
// May need to convert this into an instance
PubSub.subscribe('NEW_TODO', TodoController.pushNewTodo);

export { TodoController };
