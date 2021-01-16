import { format } from 'date-fns';
import PubSub from 'pubsub-js';
import './styles/style.css';
import subContentDOM from './scripts/dom.js';
import ProjectController from './scripts/project-controller.js';
import HTMLTodoParser from './scripts/html-todo-parser.js';

(function() {
	const date = format(Date.now(), 'yyyy-MM-dd');
	const subDom = subContentDOM(date);
	const projectController = new ProjectController();
	const homeTab = document.querySelector('#home');
	const newTodoTab = document.querySelector('#new-todo');
	const newProjectTab = document.querySelector('#new-project');
	const projectsTab = document.querySelector('#projects');

	homeTab.addEventListener('click', _homeTab);
	newTodoTab.addEventListener('click', _makeNewTodo);
	newProjectTab.addEventListener('click', _makeNewProject);
	projectsTab.addEventListener('click', _displayProjects);

	(function() {
		function storageAvailable(type) {
			var storage;
			try {
				storage = window[type];
				var x = '__storage_test__';
				storage.setItem(x, x);
				storage.removeItem(x);
				return true;
			} catch (e) {
				return (
					e instanceof DOMException &&
					(e.code === 22 ||
						e.code === 1014 ||
						e.name === 'QuotaExceededError' ||
						e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
					(storage && storage.length !== 0)
				);
			}
		}

		if (storageAvailable('localStorage')) {
			if (
				localStorage.localProjects.length === 1 &&
				localStorage.localProjects[0].title === 'My First Project' &&
				localStorage.localProjects[0].todos.length === 0
			) {
				_updateLocalStorage();
			} else {
				projectController.allProjects = JSON.parse(localStorage.getItem('localProjects'));
			}
		} else {
			alert('You do not have localStorage enabled!\nYou will not be able to save your todos!');
		}
		_homeTab();
	})();

	function _updateLocalStorage() {
		localStorage.setItem('localProjects', JSON.stringify(projectController.getAllProjects()));
	}

	function _homeTab(_msg = 'unused', _data = 'unused') {
		subDom.homeTab();
	}

	function _makeNewTodo() {
		subDom.newTodoForm(projectController.getAllProjects());
	}

	function _makeNewProject() {
		subDom.newProjectForm();
	}

	function _displayProjects() {
		subDom.projectsPage(projectController.getAllProjects());
	}

	function _pushTodosListener(_msg, todoArray) {
		console.log(todoArray);
		projectController.pushNewTodo(todoArray);
		_updateLocalStorage();
		alert('New Todo added!');
	}

	function _pushProjectsListener(_msg, projectArray) {
		if (projectController.checkProject(projectArray) === false) {
			alert('Please give your project a unique name!');
		} else {
			projectController.addNewProject(projectArray);
			_updateLocalStorage();
			alert('New Project added!');
		}
	}

	function _removeTodoListener(_msg, domArray) {
		const todo = HTMLTodoParser.htmlConvertTodo(domArray[0]);
		projectController.removeTodoFromProject(todo, domArray[1]);
		_updateLocalStorage();
	}

	function _removeProjectListener(_msg, projectId) {
		const index = parseInt(projectId.slice(-1));
		projectController.removeProject(index);
		_updateLocalStorage();
	}

	function _resubmitForm(_msg, formData) {
		if (Object.keys(formData).length < 2) {
			subDom.newProjectForm();
		} else {
			subDom.newTodoForm(projectController.getAllProjects(), formData);
		}
	}

	PubSub.subscribe('NEW_TODO', _pushTodosListener);
	PubSub.subscribe('NEW_PROJECT', _pushProjectsListener);
	PubSub.subscribe('RESUBMIT_FORM', _resubmitForm);
	PubSub.subscribe('REMOVE_TODO', _removeTodoListener);
	PubSub.subscribe('REMOVE_PROJECT', _removeProjectListener);
	PubSub.subscribe('REFRESH_DISPLAY', _displayProjects);
	PubSub.subscribe('GO_HOME', _homeTab);
})();
