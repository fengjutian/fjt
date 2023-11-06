import fs from 'fs';
import chalk from 'chalk';

export function getFilesAndFoldersInDir(path = './') {
  const items = fs.readdirSync(path);
  const result = [];
  items.forEach(item => {
    const itemPath = `${path}/${item}`;
    const stat = fs.statSync(itemPath);
    // console.log('stat', stat)
    if (stat.isDirectory()) {
      let data = {
        // 文件夹
        type: 'folder',
        name: item,
        size: stat.size
      }
    //   let children = getFilesAndFoldersInDir(itemPath)
    //   if (children && children.length) {
    //     data.children = children
    //   }
      result.push(data);
    } else {
      // 文件
      result.push({
        type: 'file',
        name: item,
        size: stat.size
      });
    }
  });

  for(let i of result) {
    console.log(chalk.blue(i.name),`${i.type}`, `${chalk.red(i.size)}B`);
  }

  // return result;
}
