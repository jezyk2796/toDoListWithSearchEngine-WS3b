const form = document.querySelector('form');
const createInput = document.querySelector('.create');
const searchInput = document.querySelector('.search');
const addBtn = document.querySelector('form button');
const list = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const tasksArr = [];

const searchTasks = (e) => {
    const searchText = e.target.value.toLowerCase();
    let searchArr = tasksArr;
    searchArr = searchArr.filter(task => task.textContent.toLowerCase().includes(searchText));
    list.textContent = "";
    searchArr.forEach(task => list.appendChild(task));
}

const renderList = () => {
    list.textContent = "";
    tasksArr.forEach((task, index) => {
        task.dataset.key = index;
        list.appendChild(task);
    });
    taskNumber.textContent = tasksArr.length;
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    tasksArr.splice(index, 1);
    renderList();
}

const createTask = (e) => {
    e.preventDefault();

    const title = createInput.value;
    const newLi = document.createElement('li');
    newLi.classList.add('newTask');
    newLi.innerHTML = `${title} <button>Usuń</button`;

    tasksArr.push(newLi);
    renderList();

    createInput.value = "";
    newLi.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', createTask);
searchInput.addEventListener('input', searchTasks);