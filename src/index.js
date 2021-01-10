import { format } from 'date-fns';
import PubSub from 'pubsub-js';
import './styles/style.css';
import subContentDOM from './scripts/dom.js';
import TodoController from './scripts/todo-controller.js';
import ProjectController from './scripts/project-controller.js';

(function() {
	const subDom = subContentDOM();
	const todoController = new TodoController();
	const projectController = new ProjectController();
	const newTodoTab = document.querySelector('#new-todo');
	const allTodosTab = document.querySelector('#all-todos');
	const projectsTab = document.querySelector('#projects');

	newTodoTab.addEventListener('click', _makeNewTodo);
	allTodosTab.addEventListener('click', _listAllTodos);
	projectsTab.addEventListener('click', _displayProjects);

	function _makeNewTodo() {
		const date = format(Date.now(), 'yyyy-MM-dd');
		subDom.newTodoForm(date, projectController.getAllProjects());
	}

	function _listAllTodos(_msg, _data) {
		const allTodosArray = todoController.getAllTodos();
		subDom.allTodosPage(allTodosArray);
	}

	function _displayProjects() {
		const allProjectsArray = projectController.getAllProjects();
		subDom.projectsPage(allProjectsArray);
	}

	function _pushTodosListener(_msg, array) {
		todoController.pushNewTodo(array);
		alert('New Todo added!');
	}

	function _removeTodoListener(_msg, index) {
		todoController.removeTodo(index);
		projectController.removeTodoFromProject(index);
	}

	PubSub.subscribe('NEW_TODO', _pushTodosListener);
	PubSub.subscribe('REMOVE_TODO', _removeTodoListener);
	PubSub.subscribe('REFRESH_DISPLAY', _listAllTodos);
})();
