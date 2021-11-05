import './style.css';
import updateStatus from './status.js';
import {addNewItem} from './functionalities.js';


let tasksArr=[];

// Add item from inputs 
const inputField = document.querySelector('.add');
const Enter = document.querySelector('.arrow');

// get data from localStorage
const savedData = localStorage.getItem('todos');
if (savedData && savedData !== null) {
  tasksArr = JSON.parse(savedData);
}

// save data to local storage methods

function saveLocalTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}


// console.log(console.log(inputField.childElementCount))
// const lastElementsIndex =(e)=> {
//  console.log(e.target)
// }

Enter.addEventListener('click',(e)=>{
  console.log(e.target)
addNewItem(tasksArr,inputField.value);
// console.log(lastElementsIndex(inputField))
// window.location.reload();
});



// selectors
const list = document.querySelector('.list');



// I have been passing the task from the local storage 
const addTodo = (task) => {
  let i=0;
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
const deleteBoxes = document.querySelectorAll('.fa-trash-alt');


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
      // window.location.reload();
    }
  });
});

deleteBoxes.forEach((trash,index)=>{
  trash.addEventListener('click',()=>{
    if (index !== null && index !== undefined) {
      tasksArr.splice(index, 1);
      saveLocalTodos(tasksArr);
      window.location.reload();
    }
  })
})
