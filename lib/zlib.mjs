import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

export const zip = (sourceFile, targetFile = sourceFile + '.gz') => {
  const gzip = createGzip();
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(targetFile);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

// const gzip = createGzip();
// const source = createReadStream('input.txt');
// const destination = createWriteStream('input.txt.gz');

// pipeline(source, gzip, destination, (err) => {
//   if (err) {
//     console.error('An error occurred:', err);
//     process.exitCode = 1;
//   }
// });
