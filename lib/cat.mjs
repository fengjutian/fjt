import fs from 'fs';
/**
 * 查看文件
 * @param {*} url 
 */
export const readFile = (url) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

