const buttonEl = document.querySelector('#add-todo-btn');
const inputEl = document.querySelector('#input-text');
const listEl = document.querySelector('#todo-list');

buttonEl.addEventListener('click', onClick);

function onClick() {
	let listElementEl = document.createElement('li');
	listElementEl.textContent = inputEl.value;
	listEl.append(listElementEl);
	inputEl.value = '';
}
