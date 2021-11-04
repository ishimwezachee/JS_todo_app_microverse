import './style.css';
import updateStatus from './status.js';

let tasksArr = [
  {
    index: 0,
    describtion: 'Wake up',
    completed: false,
  },
  {
    index: 1,
    describtion: 'Go to shower',
    completed: false,
  },
  {
    index: 2,
    describtion: 'Take breakfast',
    completed: false,
  },
  {
    index: 3,
    describtion: 'start class',
    completed: false,
  },
];

// get data from localStorage
const savedData = localStorage.getItem('todos');
if (savedData && savedData !== null) {
  tasksArr = JSON.parse(savedData);
}

// selectors
const list = document.querySelector('.list');

function saveLocalTodos(todo) {
  localStorage.setItem('todos', JSON.stringify(todo));
}

const addTodo = (task) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check');
  checkbox.id = task.index;

  const para = document.createElement('p');
  para.classList.add('task');
  para.textContent = task.describtion;
  const trash = document.createElement('i');
  trash.classList.add('fas', 'fa-trash-alt');
  const div = document.createElement('div');
  div.classList.add('checktext');
  div.appendChild(checkbox);
  div.appendChild(para);
  listItem.appendChild(div);
  listItem.appendChild(trash);
  list.appendChild(listItem);
};

const mapTasks = (tasks) => {
  tasks.forEach((task) => {
    addTodo(task);
  });
};

mapTasks(tasksArr);

const checkBoxes = document.querySelectorAll('.check');

// update the check box based on the data from local storage
tasksArr.forEach((data, index) => {
  if (data.index === index) {
    checkBoxes[index].checked = data.completed;
  }
});

checkBoxes.forEach((checkbox, id) => {
  checkbox.addEventListener('change', () => {
    const taskIndex = tasksArr[id].index;
    if (parseInt(checkbox.id, 10) === taskIndex) {
      updateStatus(tasksArr[id]);
      saveLocalTodos(tasksArr);
    }
  });
});
