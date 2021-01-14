import Project from './project.js';
// Remove below dependency from production
import Todo from './todo';

export default class ProjectController {
	constructor() {
		// Do NOT remove First Project when live, but remove the Todos
		this.allProjects = [ new Project('My First Project', []) ];
	}

	getAllProjects() {
		return this.allProjects;
	}

	addNewProject(projectArray) {
		const newProject = new Project(projectArray[0], projectArray[1]);
		return this.allProjects.push(newProject);
	}

	checkProject(projectArray) {
		for (let i = 0; i < this.allProjects.length; i++) {
			if (this.allProjects[i].title === projectArray[0]) {
				return false;
			}
		}
		return true;
	}

	removeProject(index) {
		return this.allProjects.splice(index, 1);
	}

	removeTodoFromProject(deleteTodo, projectTitle) {
		const projects = this.allProjects;
		for (let i = 0; i < projects.length; i++) {
			for (let j = 0; j < projects[i].todos.length; j++) {
				const todo = projects[i].todos[j];
				if (projects[i].title === projectTitle && todo.title === deleteTodo.title) {
					projects[i].removeTodo(j);
				}
			}
		}
	}

	pushNewTodo(array) {
		for (let i = 0; i < this.allProjects.length; i++) {
			if (this.allProjects[i].title === array[array.length - 1]) {
				this.allProjects[i].todos.push(new Todo(array[0], array[1], array[2], array[3]));
			}
		}
	}
}
