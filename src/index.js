import { format } from 'date-fns';
import PubSub from 'pubsub-js';
import './styles/style.css';
import subContentDOM from './scripts/dom.js';
import ProjectController from './scripts/project-controller.js';

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

	function _pushTodosListener(_msg, array) {
		projectController.pushNewTodo(array);
		alert('New Todo added!');
	}

	function _pushProjectsListener(_msg, array) {
		console.log(array);
		// Need to fundamentally rethink Project data fields - now a project needs to be made with due date
		// Which was an unanticipated requirement
	}

	// Not functional
	function _removeTodoListener(_msg, index) {
		projectController.removeTodoFromProject(index);
	}

	PubSub.subscribe('NEW_TODO', _pushTodosListener);
	PubSub.subscribe('NEW_PROJECT', _pushProjectsListener);
	PubSub.subscribe('REMOVE_TODO', _removeTodoListener);
})();
