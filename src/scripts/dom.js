const DOM = () => {
	function newTodoForm() {
		// title
		// description
		// dueDate
		// priority

		const subContent = document.querySelector('#sub-content');

		if (subContent.children.length === 0) {
			_removeForm();

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

			const cancelButton = document.createElement('button');
			cancelButton.className = 'new-input';
			cancelButton.id = 'cancel-new';
			cancelButton.textContent = 'Cancel';

			titleLabel.appendChild(titleInput);
			descriptionLabel.appendChild(descriptionInput);

			newTodoContainer.appendChild(titleLabel);
			newTodoContainer.appendChild(descriptionLabel);
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
