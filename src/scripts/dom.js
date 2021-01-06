const DOM = () => {
	const subContent = document.querySelector('#sub-content');

	function _clearPage() {
		subContent.innerHTML = '';
	}

	function newTodoForm(date) {
		_clearPage();

		const newTodoContainer = document.createElement('div');
		newTodoContainer.className = 'new-input';
		newTodoContainer.id = 'new-todo-container';

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

		const submitButton = document.createElement('button');
		submitButton.id = 'new-submit-button';
		submitButton.className = 'new-input';
		submitButton.textContent = 'Create';

		const cancelButton = document.createElement('button');
		cancelButton.className = 'new-input';
		cancelButton.id = 'cancel-new';
		cancelButton.textContent = 'Cancel';

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
		newTodoContainer.appendChild(submitButton);
		newTodoContainer.appendChild(cancelButton);

		subContent.appendChild(newTodoContainer);

		submitButton.addEventListener('click', _submitForm);
		submitButton.addEventListener('click', _clearForm);

		cancelButton.addEventListener('click', _clearPage);

		function _submitForm() {
			const inputs = document.querySelectorAll('input');
			let todoValues = [];

			inputs.forEach(function(input) {
				if (input.type === 'text' || input.type === 'date') {
					todoValues.push(input.value);
				} else if (input.type === 'radio' && input.checked === true) {
					todoValues.push(input.value);
				}
			});
			PubSub.publish('NEW_TODO', todoValues);
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
	}

	function allTodosPage(allTodos) {
		_clearPage();

		if (allTodos.length > 0) {
			const allTodosContainer = document.createElement('div');
			allTodosContainer.className = 'all-todos';
			allTodosContainer.id = 'all-todos-container';

			allTodos.forEach(function(todo) {
				const todoList = document.createElement('ul');
				todoList.className = 'todo-item';
				const title = document.createElement('li');
				title.className = 'todo-item';
				const description = document.createElement('li');
				description.className = 'todo-item';
				const dueDate = document.createElement('li');
				dueDate.className = 'todo-item';
				const priority = document.createElement('li');
				priority.className = 'todo-item';

				title.textContent = todo.title;
				description.textContent = todo.description;
				dueDate.textContent = todo.dueDate;
				priority.textContent = todo.priority;

				todoList.appendChild(title);
				todoList.appendChild(description);
				todoList.appendChild(dueDate);
				todoList.appendChild(priority);

				allTodosContainer.appendChild(todoList);
			});

			subContent.appendChild(allTodosContainer);
		}
	}

	function projectsPage() {
		console.log('WHOOT');
	}

	return { newTodoForm, allTodosPage, projectsPage };
};

export default DOM;
