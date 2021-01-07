export default class Project {
	constructor(title) {
		this.title = title;
		this.todos = [];
	}

	getTodos() {
		return this.todos;
	}

	addTodo(todo) {
		return this.todos.push(todo);
	}

	removeTodo(index) {
		return this.todos.splice(index, 1);
	}
}
