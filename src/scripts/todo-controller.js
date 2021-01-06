import Todo from './todo';

export default class TodoController {
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
PubSub.subscribe('NEW_TODO', TodoController.pushNewTodo);

// TodoController is undefined when trying to add a new Todo
// but NOT when getting all todos from the index
// It must be a problem with the method pubsub is calling above
// Por que?
// At least it's progress
