import Project from './project.js';
// Remove below dependency from production
import Todo from './todo';

export default class ProjectController {
	constructor() {
		// Do NOT remove First Project when live, but remove the Todos
		// Also, I think dueDate will be added here soon
		this.allProjects = [
			new Project('My First Project', '33-33-3333', [
				new Todo('test', 'test', '11-11-1111', '1'),
				new Todo('test2', 'test2', '22-22-2222', '2')
			])
		];
	}

	getAllProjects() {
		return this.allProjects;
	}

	addNewProject(projectArray) {
		const newProject = new Project(projectArray[0], projectArray[1]);
		return this.allProjects.push(newProject);
	}

	removeProject(index) {
		return this.allProjects.splice(index, 1);
	}

	// Not working yet
	removeTodoFromProject(index) {
		console.log(index);
	}

	pushNewTodo(array) {
		this.allProjects.forEach(function(project) {
			if (project.title === array[array.length - 1]) {
				project.todos.push(new Todo(array[0], array[1], array[2], array[3]));
			}
		});
	}
}
