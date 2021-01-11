export default class Project {
	constructor(title, dueDate, todos = []) {
		this.title = title;
		this.dueDate = dueDate;
		this.todos = todos;
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
