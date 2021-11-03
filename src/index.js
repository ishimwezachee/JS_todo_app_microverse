import './style.css';

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

// Methods/functions
const addTodo = (id,value) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check');
  checkbox.id = id;
  const para = document.createElement('p');
  para.classList.add('task');
  para.textContent = value;
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

// map the todos from the arrays

// update status method 



const mapTasks = (tasks) => {
  tasks.forEach((task) => {
    let index = task.index;
    let describtion = task.describtion;
    addTodo(index,describtion);
  });
};

mapTasks(tasksArr);

const checkBoxes = document.querySelectorAll('.check');

// loop to update the the status based on checked value 

checkBoxes.forEach((checkbox,index)=>{
  checkbox.addEventListener('change',()=>{
    let taskIndex = tasksArr[index].index
    if(checkbox.id ==taskIndex){
      // if(tasksArr[index].completed === false){
      //   tasksArr[index].completed = true;
      // }
      console.log(tasksArr[index])
    }
  });
});

