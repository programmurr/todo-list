export default class Project {
	constructor(title, todos = []) {
		this.title = title;
		this.todos = todos;
	}

	getTodos() {
		return this.todos;
	}

	addTodo(todo) {
		return this.todos.push(todo);
	}
}
