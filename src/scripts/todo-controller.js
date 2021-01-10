import Todo from './todo';

export default class TodoController {
	constructor() {
		// remove Todos when live
		this.allTodos = [ new Todo('test', 'test', '11-11-1111', '1'), new Todo('test2', 'test2', '22-22-2222', '2') ];
	}

	getAllTodos() {
		return this.allTodos;
	}

	pushNewTodo(array) {
		const newTodo = new Todo(array[0], array[1], array[2], array[3]);
		return this.allTodos.push(newTodo);
	}

	removeTodo(index) {
		return this.allTodos.splice(index, 1);
	}
}
