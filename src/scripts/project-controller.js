import Project from './project.js';

export default class ProjectController {
	constructor() {
		// Do NOT remove First Project when live
		this.allProjects = [
			{
				title: 'My First Project',
				todos: [
					{
						title: 'test',
						description: 'test',
						dueDate: '11-11-1111',
						priority: '1'
					},
					{
						title: 'test2',
						description: 'test2',
						dueDate: '22-22-2222',
						priority: '2'
					}
				]
			},
			{
				title: 'My Second Project',
				todos: [
					{
						title: 'test3',
						description: 'test3',
						dueDate: '33-33-3333',
						priority: '3'
					}
				]
			}
		];
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

	removeTodoFromProject(index) {
		console.log(index);
	}
}
