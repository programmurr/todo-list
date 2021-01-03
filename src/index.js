import { format } from 'date-fns';
import './styles/style.css';
import DOM from './scripts/dom.js';
import Observer from './scripts/observer.js';

(function() {
	const dom = DOM();
	const observer = Observer();
	const newTodo = document.querySelector('#new-todo');
	// const allTodos = document.querySelector('#all-todos');

	newTodo.addEventListener('click', _makeNewTodo);

	function _makeNewTodo() {
		const date = format(Date.now(), 'yyyy-MM-dd');
		dom.newTodoForm(date);
	}

	observer.addObserver(dom);
	console.log(observer.observers);
})();
