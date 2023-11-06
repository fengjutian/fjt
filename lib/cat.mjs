import fs from 'fs';

export const readFile = (url) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

