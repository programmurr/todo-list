import Todo from './todo';

export default class TodoController {
	constructor() {
		this._allTodos = [];
	}

	getAllTodos() {
		return this._allTodos;
	}

	pushNewTodo(array) {
		const newTodo = new Todo(array[0], array[1], array[2], array[3]);
		return this._allTodos.push(newTodo);
	}
}
