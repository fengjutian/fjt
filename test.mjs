import { getFilesAndFoldersInDir } from './lib/ls.mjs';

let fileList = getFilesAndFoldersInDir('./');
console.log(fileList)
