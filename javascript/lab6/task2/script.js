`use strict`;

let countText = document.getElementById('list-empty__text');
let editNameInput = document.getElementById('edit-input');
let addNameInput = document.getElementById('add-input');
const addButton = document.getElementById('add-btn');
const taskList = document.querySelector('.tasks-list');
const snackbar = document.querySelector('.snackbar');
const snackbarText = document.querySelector('.snackbar__text');
const modalAdd = document.querySelector('.modal-add');
const modalChange = document.querySelector('.modal-change');
const sortContainer = document.querySelector('.sort-btns');
const sortBtn = document.getElementById('sort-btn');
const sortByDateBtn = document.getElementById('sort-by-date');
const sortByStatusBtn = document.getElementById('sort-by-status');
const sortByUpdateBtn = document.getElementById('sort-by-update');
const resetSortBtn = document.getElementById('reset-sort');


let tasks = [];
let listItem = null;
let currentEditId = null;

function generateID(){
    return tasks.length === 0 ? 1 : Math.max(...tasks.map(t => t.id)) + 1;
}

function createTaskCard(task) {
    const card = document.createElement('li');
    listItem = card;
    listItem.classList.add('list-item');
    card.innerHTML = `
            <div class="list-item__left">
                <input class="checkbox-element" type="checkbox">
                <span class="list-item__text">${task.name}</span>
            </div>
            <div class="list-item__btns">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        listItem.classList.add('show');
        const editBtn = card.querySelector('.edit-btn');
        editBtn.addEventListener('click', () => {
            currentEditId = task.id;
            editNameInput.value = task.name;
            modalChange.classList.remove('hide');
            modalChange.classList.add('show');
        });
        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            card.classList.remove('show');
            card.classList.add('hide');
            setTimeout(() => deleteTask(task.id), 700);
        });
        const checkbox = card.querySelector('.checkbox-element');
        checkbox.checked = task.completed;
        checkbox.addEventListener('change',(e)=>{
            tasks = tasks.map(t => t.id === task.id ? {...t, completed: e.target.checked} : t);
        })

    return card;
}

function renderAllTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskCard = createTaskCard(task);
        taskList.appendChild(taskCard);
    });
}

function showSnackbar(message) {
    snackbarText.textContent = message;
    snackbar.classList.remove('hide');
    snackbar.classList.add('show');
    setTimeout(() => {
        snackbar.classList.remove('show');
        snackbar.classList.add('hide');
    }, 3000);
}

const addTask = (e) => {
    e.preventDefault();
    const newTask = {
        id: generateID(),
        name: addNameInput.value,
        description: addNameInput.value,
        createdAt: new Date(),
        completed: false
    };
    tasks = [...tasks, newTask];
    renderAllTasks();
    taskList.classList.add('show');
    countText.style.display = 'none';
    modalAdd.classList.remove('show');
    modalAdd.classList.add('hide');
    showSnackbar(`Задача "${newTask.name}" додана!`);
}

addButton.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalAdd.classList.add('show');
});

document.getElementById('add-form').addEventListener('submit', addTask);

const editTask = (taskId, newName) => {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task,
                name: newName,
                updatedAt: new Date()
             };
        }
        return task;
    });
    showSnackbar(`Задача "${newName}" відредагована!`);
    renderAllTasks();
    modalChange.classList.remove('show');
    modalChange.classList.add('hide');
}

document.getElementById('edit-form').addEventListener('submit', (e) => {
    e.preventDefault();
    editTask(currentEditId, editNameInput.value);
});

const deleteTask = (taskId) => {
    const taskToDelete = tasks.find(task => task.id === taskId);
    tasks = tasks.filter(task => task.id !== taskId);
    renderAllTasks();
    if (tasks.length === 0) {
        countText.style.display = 'block';
    }
    showSnackbar(`Задача "${taskToDelete.name}" видалена!`);
}

sortBtn.addEventListener('click', () => {
    sortContainer.classList.remove('hide');
    sortContainer.classList.add('show');
});

resetSortBtn.addEventListener('click',() => {
    renderAllTasks();
    sortContainer.classList.remove('show');
    sortContainer.classList.add('hide');
});

const sortByCreatedAt = () => {
    const sorted = [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    taskList.innerHTML = '';
    sorted.forEach(task => taskList.appendChild(createTaskCard(task)));
}

const sortByUpdatedAt = () => {
    taskList.innerHTML = '';
    const sorted = [...tasks].sort((a, b) =>
        new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
    sorted.forEach(task => taskList.appendChild(createTaskCard(task)));
}

const sortByStatus = () => {
    const sorted = [...tasks].sort((a, b) => b.completed - a.completed);
    taskList.innerHTML = '';
    sorted.forEach(task => taskList.appendChild(createTaskCard(task)));
}

sortByDateBtn.addEventListener('click',sortByCreatedAt);
sortByUpdateBtn.addEventListener('click',sortByUpdatedAt);
sortByStatusBtn.addEventListener('click',sortByStatus);
