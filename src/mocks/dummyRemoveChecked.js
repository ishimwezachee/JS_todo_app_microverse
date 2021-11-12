import { JSDOM } from 'jsdom';

const checkedDom = new JSDOM('<li id="check-list"><div><input type="checkbox" checked="true" id="checkbox"</div></li>');
global.document = checkedDom.window.document;
global.window = checkedDom.window;

export default checkedDom;
