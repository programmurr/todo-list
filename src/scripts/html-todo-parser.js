import Todo from './todo';

export default class HTMLTodoParser {
	static htmlConvertTodo(todoHTML) {
		const elements = todoHTML.querySelectorAll('li');
		let todoParams = [];

		elements.forEach(function(element) {
			todoParams.push(element.textContent);
		});

		return new Todo(todoParams[0], todoParams[1], todoParams[2], todoParams[3]);
	}
}
