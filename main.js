const form = document.querySelector('form');
const createInput = document.querySelector('.create');
const searchInput = document.querySelector('.search');
const addBtn = document.querySelector('form button');
const list = document.querySelector('ul');
const tasksArr = [];

const createTask = (e) => {
    e.preventDefault();

    const title = createInput.value;
    const newLi = document.createElement('li');
    newLi.classList.add('newTask');
    newLi.innerHTML = `${title} <button>Usuń</button`;

    tasksArr.push(newLi);
    list.textContent = "";
    tasksArr.forEach((task, index) => {
        task.dataset.key = index;
        list.appendChild(task);
    });

    createInput.value = "";
}

form.addEventListener('submit', createTask);