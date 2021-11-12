import { JSDOM } from 'jsdom';

const trashDom = new JSDOM('<li id="item"><i id="trash"></i></li>');
global.document = trashDom.window.document;
global.window = trashDom.window;

export default trashDom;