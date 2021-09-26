const buttonEl = document.querySelector('#add-todo-btn');
const inputEl = document.querySelector('#input-text');
const listEl = document.querySelector('#todo-list');
const listElementEl = document.createElement('li');

buttonEl.addEventListener('click', onClick);

function onClick() {
        listElementEl.textContent = inputEl.value;
        listEl.append(listElementEl);
        inputEl.value = '';
}
