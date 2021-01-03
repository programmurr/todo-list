// import { format } from 'date-fns';
import './styles/style.css';
import DOM from './scripts/dom.js';

(function() {
	const newTodo = document.querySelector('#new-todo');
	// const allTodos = document.querySelector('#all-todos');

	newTodo.addEventListener('click', _makeNewTodo);

	function _makeNewTodo() {
		DOM().newTodoForm();
	}
})();
