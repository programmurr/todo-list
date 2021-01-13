import { format } from 'date-fns';
import PubSub from 'pubsub-js';
import './styles/style.css';
import subContentDOM from './scripts/dom.js';
import ProjectController from './scripts/project-controller.js';
import HTMLTodoParser from './scripts/html-todo-parser.js';
// Make a seperate DOM Controller for nav bar?
// Add Complete button to Project

(function() {
	const date = format(Date.now(), 'yyyy-MM-dd');
	const subDom = subContentDOM(date);
	const projectController = new ProjectController();
	const newTodoTab = document.querySelector('#new-todo');
	const newProjectTab = document.querySelector('#new-project');
	const projectsTab = document.querySelector('#projects');

	newTodoTab.addEventListener('click', _makeNewTodo);
	projectsTab.addEventListener('click', _displayProjects);
	newProjectTab.addEventListener('click', _makeNewProject);

	function _makeNewTodo() {
		subDom.newTodoForm(projectController.getAllProjects());
	}

	function _makeNewProject() {
		subDom.newProjectForm(date);
	}

	function _displayProjects() {
		const allProjectsArray = projectController.getAllProjects();
		subDom.projectsPage(allProjectsArray);
	}

	function _pushTodosListener(_msg, todoArray) {
		projectController.pushNewTodo(todoArray);
		alert('New Todo added!');
	}

	function _pushProjectsListener(_msg, projectArray) {
		if (projectController.checkProject(projectArray) === false) {
			alert('Please give your project a unique name!');
		} else {
			projectController.addNewProject(projectArray);
			alert('New Project added!');
		}
	}

	function _removeTodoListener(_msg, domArray) {
		const todo = HTMLTodoParser.htmlConvertTodo(domArray[0]);
		projectController.removeTodoFromProject(todo, domArray[1]);
	}

	function _removeProjectListener(_msg, projectId) {
		const index = parseInt(projectId.slice(-1));
		projectController.removeProject(index);
	}

	PubSub.subscribe('NEW_TODO', _pushTodosListener);
	PubSub.subscribe('NEW_PROJECT', _pushProjectsListener);
	PubSub.subscribe('REMOVE_TODO', _removeTodoListener);
	PubSub.subscribe('REMOVE_PROJECT', _removeProjectListener);
	PubSub.subscribe('REFRESH_DISPLAY', _displayProjects);
})();
