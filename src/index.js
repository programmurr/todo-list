import { format } from 'date-fns';
import './styles/style.css';
import DOM from './scripts/dom.js';
import PubSub from 'pubsub-js';
import todoController from './scripts/todo-controller';

(function() {
	const dom = DOM();
	const todoController = todoController();
	const newTodoTab = document.querySelector('#new-todo');
	const allTodosTab = document.querySelector('#all-todos');

	newTodoTab.addEventListener('click', _makeNewTodo);
	allTodosTab.addEventListener('click', _listAllTodos);

	function _makeNewTodo() {
		const date = format(Date.now(), 'yyyy-MM-dd');
		dom.newTodoForm(date);
	}

	function _listAllTodos() {
		const todosArray = todoController.allTodos;
		dom.allTodosPage(todosArray);
	}
})();
