import Todo from './todo';

const todoController = function(_msg, array) {
	let allTodos = [];

	(function(array) {
		const newTodo = new Todo(array[0], array[1], array[2], array[3]);
		allTodos.push(newTodo);
	})(array);

	return { allTodos };
};

PubSub.subscribe('NEW_TODO', todoController);

export { todoController };
