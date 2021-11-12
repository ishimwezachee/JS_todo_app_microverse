import { JSDOM } from 'jsdom';

const EditDom = new JSDOM('<input id="edit" type="text" value="hello">');
global.document = EditDom.window.document;
global.window = EditDom.window;

export default EditDom;