const subContentDOM = (date) => {
	const subContent = document.querySelector('#sub-content');

	function _clearPage() {
		subContent.innerHTML = '';
	}

	function newTodoForm(allProjectsArray) {
		_clearPage();

		const newTodoContainer = document.createElement('div');
		newTodoContainer.className = 'new-input';
		newTodoContainer.id = 'new-todo-container';

		// Form inputs
		const titleInput = document.createElement('input');
		titleInput.type = 'text';
		titleInput.className = 'new-input';
		titleInput.id = 'title-input';
		titleInput.name = 'title';
		const titleLabel = document.createElement('label');
		titleLabel.for = 'title';
		titleLabel.className = 'new-input';
		titleLabel.textContent = 'Title';

		const descriptionInput = document.createElement('input');
		descriptionInput.type = 'text';
		descriptionInput.className = 'new-input';
		descriptionInput.id = 'description-input';
		descriptionInput.name = 'description';
		const descriptionLabel = document.createElement('label');
		descriptionLabel.for = 'description';
		descriptionLabel.className = 'new-input';
		descriptionLabel.textContent = 'Description';

		const dueDate = document.createElement('input');
		dueDate.type = 'date';
		dueDate.name = 'due-date';
		dueDate.id = 'new-due-date';
		dueDate.className = 'new-input';
		dueDate.value = date;
		dueDate.min = date;
		const dueDateLabel = document.createElement('label');
		dueDateLabel.for = 'due-date';
		dueDateLabel.className = 'new-input';
		dueDateLabel.textContent = 'Due Date';

		const priority1 = document.createElement('input');
		priority1.type = 'radio';
		priority1.className = 'new-input';
		priority1.id = 'priority1';
		priority1.name = 'priority';
		priority1.value = '1';
		const priority1Label = document.createElement('label');
		priority1Label.className = 'new-input';
		priority1Label.for = 'priority1';
		priority1Label.textContent = 'Priority 1';

		const priority2 = document.createElement('input');
		priority2.type = 'radio';
		priority2.className = 'new-input';
		priority2.id = 'priority2';
		priority2.name = 'priority';
		priority2.value = '2';
		const priority2Label = document.createElement('label');
		priority2Label.className = 'new-input';
		priority2Label.for = 'priority2';
		priority2Label.textContent = 'Priority 2';

		const priority3 = document.createElement('input');
		priority3.type = 'radio';
		priority3.className = 'new-input';
		priority3.id = 'priority3';
		priority3.name = 'priority';
		priority3.value = '3';
		const priority3Label = document.createElement('label');
		priority3Label.className = 'new-input';
		priority3Label.for = 'priority3';
		priority3Label.textContent = 'Priority 3';

		// Project selection
		const selectProject = document.createElement('select');
		selectProject.name = 'projects';
		selectProject.id = 'project-select';
		const selectProjectLabel = document.createElement('label');
		selectProjectLabel.className = 'new-input';
		selectProjectLabel.id = 'select-project-label';
		selectProjectLabel.for = 'project-select';
		selectProjectLabel.textContent = 'Add this to:';

		const defaultOption = document.createElement('option');
		defaultOption.value = '';
		defaultOption.textContent = '-- Choose Project --';

		const firstProject = document.createElement('option');
		firstProject.value = `${allProjectsArray[0].title}`;
		firstProject.textContent = `${allProjectsArray[0].title}`;

		selectProject.appendChild(defaultOption);
		selectProject.appendChild(firstProject);

		selectProjectLabel.appendChild(selectProject);

		// Buttons
		const createButton = document.createElement('button');
		createButton.id = 'new-todo-button';
		createButton.className = 'new-input';
		createButton.textContent = 'Create';

		const cancelButton = document.createElement('button');
		cancelButton.className = 'new-input';
		cancelButton.id = 'cancel-new';
		cancelButton.textContent = 'Cancel';

		// Add to newTodoContainer div
		titleLabel.appendChild(titleInput);
		descriptionLabel.appendChild(descriptionInput);
		dueDateLabel.appendChild(dueDate);
		priority1Label.appendChild(priority1);
		priority2Label.appendChild(priority2);
		priority3Label.appendChild(priority3);

		newTodoContainer.appendChild(titleLabel);
		newTodoContainer.appendChild(descriptionLabel);
		newTodoContainer.appendChild(dueDateLabel);
		newTodoContainer.appendChild(priority1Label);
		newTodoContainer.appendChild(priority2Label);
		newTodoContainer.appendChild(priority3Label);
		newTodoContainer.appendChild(selectProjectLabel);
		newTodoContainer.appendChild(createButton);
		newTodoContainer.appendChild(cancelButton);

		subContent.appendChild(newTodoContainer);

		createButton.addEventListener('click', _submitForm);
		createButton.addEventListener('click', _clearForm);

		cancelButton.addEventListener('click', _clearPage);
	}

	function _inputsCheck(inputs) {
		let counter = 0;
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].type === 'text' && inputs[i].value === '') {
				return true;
			} else if (inputs[i].type === 'radio' && inputs[i].checked === false) {
				counter++;
			}
			if (counter === 3) {
				return true;
			}
		}
		return false;
	}

	function _clearForm() {
		const inputs = document.querySelectorAll('input');
		inputs.forEach(function(input) {
			if (input.type === 'text') {
				input.value = '';
			} else if (input.type === 'radio') {
				input.checked = false;
			} else if (input.type === 'date') {
				input.value = date;
			}
		});
	}

	function _submitForm() {
		const inputs = document.querySelectorAll('input');
		const select = document.querySelector('select');

		// Input info currently gets lost after the alert is raised
		if (_inputsCheck(inputs)) {
			alert('Please complete all elements of the form!');
		} else if (select && select.value === '') {
			alert('Please choose a project!');
		} else {
			let formValues = [];

			inputs.forEach(function(input) {
				if (input.type === 'text' || input.type === 'date') {
					formValues.push(input.value);
				} else if (input.type === 'radio' && input.checked === true) {
					formValues.push(input.value);
				}
			});
			if (select) {
				formValues.push(select.value);
			}

			if (this.id === 'new-todo-button') {
				return PubSub.publish('NEW_TODO', formValues);
			} else {
				return PubSub.publish('NEW_PROJECT', formValues);
			}
		}
	}

	function newProjectForm(date) {
		_clearPage();

		const newProjectContainer = document.createElement('div');
		newProjectContainer.className = 'new-project-form';
		newProjectContainer.div = 'new-project-div';

		const titleInput = document.createElement('input');
		titleInput.type = 'text';
		titleInput.className = 'new-project-div';
		titleInput.id = 'project-title';
		titleInput.name = 'project-title';
		const titleLabel = document.createElement('label');
		titleLabel.for = 'project-title';
		titleLabel.className = 'new-project-div';
		titleLabel.textContent = 'Project Title';

		const dueDate = document.createElement('input');
		dueDate.type = 'date';
		dueDate.name = 'project-due-date';
		dueDate.id = 'project-due-date';
		dueDate.className = 'new-project-div';
		dueDate.value = date;
		dueDate.min = date;
		const dueDateLabel = document.createElement('label');
		dueDateLabel.for = 'project-due-date';
		dueDateLabel.className = 'new-project-div';
		dueDateLabel.textContent = 'Due Date';

		const createButton = document.createElement('button');
		createButton.id = 'project-create-button';
		createButton.className = 'new-project-div';
		createButton.textContent = 'Create';

		const cancelButton = document.createElement('button');
		cancelButton.className = 'new-project-div';
		cancelButton.id = 'cancel-project';
		cancelButton.textContent = 'Cancel';

		createButton.addEventListener('click', _submitForm);
		createButton.addEventListener('click', _clearForm);
		cancelButton.addEventListener('click', _clearPage);

		titleLabel.appendChild(titleInput);
		dueDateLabel.appendChild(dueDate);

		newProjectContainer.appendChild(titleLabel);
		newProjectContainer.appendChild(dueDateLabel);
		newProjectContainer.appendChild(createButton);
		newProjectContainer.appendChild(cancelButton);

		subContent.appendChild(newProjectContainer);
	}

	function _removeTodo() {
		// TODO: This isn't working - get Project logic fully set up first
		PubSub.publish('REMOVE_TODO', this.id);
	}

	function _refreshDisplay() {
		// TODO: This isn't working - get Project logic fully set up first
		PubSub.publish('REFRESH_DISPLAY', 'blank');
	}

	function _displayTodo(container, todo, i) {
		const todoItem = document.createElement('ul');
		todoItem.className = 'todo-item';
		const title = document.createElement('li');
		title.className = 'todo-item';
		const description = document.createElement('li');
		description.className = 'todo-item';
		const dueDate = document.createElement('li');
		dueDate.className = 'todo-item';
		const priority = document.createElement('li');
		priority.className = 'todo-item';
		const completeButton = document.createElement('button');
		completeButton.className = 'todo-item';
		completeButton.textContent = 'Complete';
		completeButton.id = parseInt(i);

		completeButton.addEventListener('click', _removeTodo);
		completeButton.addEventListener('click', _refreshDisplay);

		title.textContent = todo.title;
		description.textContent = todo.description;
		dueDate.textContent = todo.dueDate;
		priority.textContent = todo.priority;

		todoItem.appendChild(title);
		todoItem.appendChild(description);
		todoItem.appendChild(dueDate);
		todoItem.appendChild(priority);
		todoItem.appendChild(completeButton);

		container.appendChild(todoItem);
	}

	function projectsPage(allProjectsArray) {
		_clearPage();

		const allProjectsContainer = document.createElement('div');
		allProjectsContainer.className = 'all-projects';
		allProjectsContainer.id = 'all-projects-container';

		if (allProjectsArray.length > 0) {
			for (let i = 0; i < allProjectsArray.length; i++) {
				const projectDiv = document.createElement('div');
				projectDiv.className = 'all-projects';
				projectDiv.id = `project${i}`;

				const projectTitle = document.createElement('h3');
				projectTitle.className = 'all-projects';
				projectTitle.id = `project-title${i}`;
				projectTitle.textContent = allProjectsArray[i].title;

				projectDiv.appendChild(projectTitle);

				allProjectsArray[i].todos.forEach(function(todo) {
					_displayTodo(projectDiv, todo, i);
				});

				allProjectsContainer.appendChild(projectDiv);
			}
		} else {
			_emptyDiv('projects');
		}
		subContent.appendChild(allProjectsContainer);
	}

	function _emptyDiv(items) {
		const empty = document.createElement('p');
		empty.id = 'div-empty';
		empty.textContent = `No ${items} here!`;
		subContent.appendChild(empty);
	}

	return { newTodoForm, newProjectForm, projectsPage };
};

export default subContentDOM;
