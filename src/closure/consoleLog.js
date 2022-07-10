function createPrintMessages(type, styles) {
  return function message(str) {
    console.log(`%c ${type}: ${str}`, styles);
  }
}

const error = createPrintMessages('error', 'background: red; color:white;');
const warning = createPrintMessages('warning', 'background: orange; color:white;');
const success = createPrintMessages('success', 'background: green; color:white;');


error('This is an error'); 