import Project from './project.js';

export default class ProjectController {
	constructor() {
		// Do NOT remove First Project when live
		this.allProjects = [ { title: 'My First Project', todos: [] } ];
	}

	getAllProjects() {
		return this.allProjects;
	}

	addNewProject(title, todos) {
		const newProject = new Project(title, todos);
		return this.allProjects.push(newProject);
	}

	removeProject(index) {
		return this.allProjects.splice(index, 1);
	}
}
