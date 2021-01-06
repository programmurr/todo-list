import Todo from './todo';

export default class TodoController {
	constructor() {
		// remove when live
		this.allTodos = [
			{
				title: 'test',
				description: 'test',
				dueDate: '99-99-9999',
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
}
