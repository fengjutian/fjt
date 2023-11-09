import * as monaco from './monaco-editor-0.44.0/package/esm/vs/editor/editor.api.js';

const container = document.getElementById("container");
console.log('container', container)

const monacoInstance = monaco.editor.create(container,{
    value:`console.log("hello,world")`,
    language:"javascript"
})
monacoInstance.dispose();
