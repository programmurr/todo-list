const DOM = () => {
	function newTodoForm(date) {
		// title
		// description
		// dueDate
		// priority

		const subContent = document.querySelector('#sub-content');

		if (subContent.children.length === 0) {
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

			const submitButton = document.createElement('input');
			submitButton.id = 'new-submit-button';
			submitButton.className = 'new-input';
			submitButton.type = 'submit';
			submitButton.value = 'Create';

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

			cancelButton.addEventListener('click', _removeForm);
		}

		function _removeForm() {
			subContent.innerHTML = '';
		}
	}

	return { newTodoForm };
};

export default DOM;
