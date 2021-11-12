import { JSDOM } from 'jsdom';
export const ListDom = new JSDOM(`<!DOCTYPE html><body><ul id="list" class="flcol"></ul></body>`);
global.document = ListDom.window.document;
global.window = ListDom.window;



