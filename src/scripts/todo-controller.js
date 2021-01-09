import Todo from './todo';

export default class TodoController {
	constructor() {
		// remove objects when live
		this.allTodos = [
			{
				title: 'test',
				description: 'test',
				dueDate: '11-11-1111',
				priority: '1'
			},
			{
				title: 'test2',
				description: 'test2',
				dueDate: '22-22-2222',
				priority: '2'
			}
		];
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
