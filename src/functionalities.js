export default class Tasks {
  static localData() {
    let tasks = [];
    const savedData = localStorage.getItem('todos');
    if (savedData && savedData !== null) {
      tasks = JSON.parse(savedData);
    } else {
      tasks = [];
    }
    return tasks;
  }

  static saveLocalTodos(arr) {
    localStorage.setItem('todos', JSON.stringify(arr));
  }

  static createElement(task, list) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    checkbox.id = task.index;
    checkbox.checked = task.complete;
    const para = document.createElement('p');
    para.classList.add('task');
    para.textContent = task.description;
    const editInput = document.createElement('input');
    editInput.classList.add('edit');
    const small = document.createElement('small');
    small.classList.add('edit');
    small.innerHTML = '<i class="fas fa-check"></i>';
    const trash = document.createElement('i');
    trash.classList.add('fas', 'fa-trash-alt');
    const div = document.createElement('div');
    div.classList.add('checktext');
    div.appendChild(checkbox);
    div.appendChild(para);
    div.appendChild(editInput);
    div.appendChild(small);
    listItem.appendChild(div);
    listItem.appendChild(trash);
    list.appendChild(listItem);
  }

  // list is place where we will add our elements
  static mapTasks(list) {
    Tasks.localData().forEach((task) => Tasks.createElement(task, list));
  }

  static lastElementsIndex(parent) {
    if (parent.childElementCount > 0) {
      console.log(parent.childElementCount);
      return parent.childElementCount + 1;
    }
    return 1;
  }

  static organizeIndexes(arr) {
    arr.forEach((task, index) => {
      task.index = index + 1;
    });
    return arr;
  }

  // remove Element
  static removeElement(index, elem) {
    const arr = Tasks.localData();
    arr.splice(index, 1);
    Tasks.organizeIndexes(arr);
    Tasks.saveLocalTodos(arr);
    // Remove from HTML
    elem.parentElement.remove();
  }

  // edit element
  static editTask(e, index) {
    const textarea = e.srcElement.nextElementSibling;
    const confirm = textarea.nextElementSibling;
    confirm.classList.remove('edit');
    textarea.classList.remove('edit');
    e.target.classList.add('edit');
    confirm.addEventListener('click', () => {
      if (textarea.value === '') {
        textarea.value = e.target.innerHTML;
      }

      Tasks.editTextarea(textarea.value, index);
      confirm.classList.add('edit');
      textarea.classList.add('edit');
      e.target.textContent = textarea.value;
      e.target.classList.remove('edit');
    });
  }

  static editTextarea(text, index) {
    const tasks = Tasks.localData();
    tasks[index].description = text;
    Tasks.saveLocalTodos(tasks);
  }

  // clear All checked elements
  static removeAllChecked(checkbox, parentElem) { 
    if (checkbox.checked) {
      parentElem.remove();
    }
    const arr = Tasks.localData();
    const unChecked = arr.filter((task) => !task.complete);
    Tasks.organizeIndexes(unChecked);
    Tasks.saveLocalTodos(unChecked);
  }
}