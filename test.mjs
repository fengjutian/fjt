import { getFilesAndFoldersInDir } from './ls.mjs';

let fileList = getFilesAndFoldersInDir('./');
console.log(fileList)