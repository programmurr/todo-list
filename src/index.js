import { format } from 'date-fns';
import './styles/style.css';
import DOM from './scripts/dom.js';
import PubSub from 'pubsub-js';
import TodoController from './scripts/todo-controller.js';

(function() {
	const dom = DOM();
	const todoController = new TodoController();
	const newTodoTab = document.querySelector('#new-todo');
	const allTodosTab = document.querySelector('#all-todos');
	const projectsTab = document.querySelector('#projects');

	newTodoTab.addEventListener('click', _makeNewTodo);
	allTodosTab.addEventListener('click', _listAllTodos);
	projectsTab.addEventListener('click', _displayProjects);

	function _makeNewTodo() {
		const date = format(Date.now(), 'yyyy-MM-dd');
		dom.newTodoForm(date);
	}

	function _listAllTodos(_msg, _data) {
		const allTodosArray = todoController.getAllTodos();
		dom.allTodosPage(allTodosArray);
	}

	function _displayProjects() {
		dom.projectsPage();
	}

	function _pushTodosListener(_msg, array) {
		todoController.pushNewTodo(array);
		alert('New Todo added!');
	}

	function _removeTodoListener(_msg, index) {
		todoController.removeTodo(index);
	}

	PubSub.subscribe('NEW_TODO', _pushTodosListener);
	PubSub.subscribe('REMOVE_TODO', _removeTodoListener);
	PubSub.subscribe('REFRESH_DISPLAY', _listAllTodos);
})();
