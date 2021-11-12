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

  // remove to local storage

  static removeToLocalStorage(arr, index) {
    return arr.splice(index, 1);
  }

  // remove Element

  static removeElementDom(trash) {
    return trash.parentElement.remove();
  }

  static removeElement(index, elem) {
    const arr = Tasks.localData();
    // arr.splice(index, 1);
    Tasks.removeToLocalStorage(arr, index);
    Tasks.organizeIndexes(arr);
    Tasks.saveLocalTodos(arr);
    // Remove from HTML
    Tasks.remveElementDom(elem);
    // elem.parentElement.remove();
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

  static editeTextAreaDom(arr, index, text) {
    arr[index].description = text;
    return arr[index].description;
  }

  static editTextarea(text, index) {
    const tasks = Tasks.localData();
    Tasks.editeTextAreaDom(tasks, index, text);
    Tasks.saveLocalTodos(tasks);
  }

  static removeCheckeDom(box, parent) {
    if (box.checked) {
      parent.remove();
    }
  }

  static removeCheckedInLocal(arr) {
    return arr.filter((task) => !task.complete);
  }

  // clear All checked elements
  static removeAllChecked(checkbox, parentElem) {
    Tasks.removeCheckeDom(checkbox, parentElem);
    const arr = Tasks.localData();
    const unChecked = Tasks.removeCheckedInLocal(arr);
    Tasks.organizeIndexes(unChecked);
    Tasks.saveLocalTodos(unChecked);
  }

  // update task status
  static completeStatus(id, e) {
    const tasks = Tasks.localData();
    tasks[id].complete = e.target.checked;
    Tasks.saveLocalTodos(tasks);
  }
}