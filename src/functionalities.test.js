import { JSDOM } from 'jsdom';
import Tasks from './functionalities.js';


const dom = new JSDOM(`<!DOCTYPE html><body><ul id="list" class="flcol"></body>`);// eslint-disable-line
global.document = dom.window.document;
global.window = dom.window;


describe('Add item to the browser and local storage',()=>{
    const list  = document.getElementById('list')
    const task = {
       index:1,
       complete:false,
       description:'eat'
      };
      Tasks.createElement(task,list);
    test('create one list Item',()=>{
        expect(list.childElementCount).toBe(1);
    })
})