import {ListDom} from './mocks/dummyAddItem.js';
import {trashDom} from './mocks/dummyDeleteItem.js';
import Tasks from './functionalities.js';
import MockStorage from './mocks/dummystorage';

let task = {
    index:1,
    complete:false,
    description:'eat'
   };

describe('Add item to the browser and local storage',()=>{
    const list  = ListDom.window.document.getElementById('list')
      Tasks.createElement(task,list);
    test('create one list Item',()=>{
        expect(list.childElementCount).toBe(1);
    });

    test('save one Item to local storage at a time',()=>{
        let data = [];
        data.push(task);
        let storage = new MockStorage();
        storage.setItem('list',data);
        let result = storage.getItem('list');
        expect(result.length).toBe(1);
    });
});


describe('Remove Item from local storage and the browser',()=>{
test('remove item from local storage',()=>{
   let index = 0;
   let storage = new MockStorage();
   let data = [];
   data.push(task)
   storage.setItem('list',data);
   const arr = storage.getItem('list');
 Tasks.removeToLocalStorage(arr,index);
expect(arr.length).toBe(0)
});

test('delete Item form the browser',()=>{
    let trash = trashDom.window.document.getElementById('trash'); 
   expect(Tasks.removeElementDom(trash)).toBeUndefined();
});
});