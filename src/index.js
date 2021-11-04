import './style.css';
import {updateStatus} from './status.js';

const tasksArr = [
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

// selectors
const list = document.querySelector('.list');

function saveLocalTodos(todo) {
  localStorage.setItem("todos", JSON.stringify(todo));
}


const addTodo = (task) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check');
  checkbox.id = task.index

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

// loop to update the the status based on checked value 
checkBoxes.forEach((checkbox,id)=>{
  checkbox.addEventListener('change',()=>{
    let taskIndex = tasksArr[id].index;
    if(checkbox.id ==taskIndex){
      updateStatus(tasksArr[id]);
      saveLocalTodos(tasksArr);
    }
  });
});

