import './style.css';
import Tasks from './functionalities.js';
import Task from './task.js';

const removeChecked = document.querySelector('.clear');

const list = document.querySelector('.list');
Tasks.mapTasks(list);

// Add item from inputs 
const inputField = document.querySelector('.add');
const Enter = document.querySelector('.arrow');

Enter.addEventListener('click',(e)=>{
  const tasks = Tasks.localData();
  const newTask = new Task(inputField.value, Tasks.lastElementsIndex(list));
  tasks.push(newTask);
  Tasks.organizeIndexes(tasks);
  Tasks.saveLocalTodos(tasks);
  window.location.reload();
  inputField.value ='';
});


const checkBoxes = document.querySelectorAll('.check');
const deleteBoxes = document.querySelectorAll('.fa-trash-alt');


checkBoxes.forEach((checkbox, id) => {
  checkbox.addEventListener('change', (e) => {
    const tasks = Tasks.localData();
    const  taskIndex = tasks[id].index;
    if (parseInt(checkbox.id, 10) === taskIndex) {
      tasks[id].complete = e.target.checked;
      Tasks.saveLocalTodos(tasks);
      // location.reload();
    }
  });
});

deleteBoxes.forEach((trash,index)=>{
  trash.addEventListener('click',()=>{    
    Tasks.removeElement(index, trash);
  })
})

const editTask = document.querySelectorAll('.task');
editTask.forEach((para, index) => para.addEventListener('click', (e) => {
  Tasks.editTask(e, index);
}));

removeChecked.addEventListener('click',()=>{
  checkBoxes.forEach((checkbox, id) => {
   let li = checkbox.parentElement.parentElement;
  Tasks.removeAllChecked(checkbox,li)
  });
})