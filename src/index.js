import { format } from 'date-fns';
import './styles/style.css';
import DOM from './scripts/dom.js';
import PubSub from 'pubsub-js';
import TodoController from './scripts/todo-controller.js';

(function() {
	const dom = DOM();
	const newTodoTab = document.querySelector('#new-todo');
	const allTodosTab = document.querySelector('#all-todos');

	newTodoTab.addEventListener('click', _makeNewTodo);
	allTodosTab.addEventListener('click', _listAllTodos);

	function _makeNewTodo() {
		const date = format(Date.now(), 'yyyy-MM-dd');
		dom.newTodoForm(date);
	}

	function _listAllTodos() {
		const allTodosArray = TodoController.getAllTodos();
		dom.allTodosPage(allTodosArray);
	}
})();
