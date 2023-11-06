import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

/**
 * 压缩文件
 * @param {源文件} sourceFile 
 * @param {目标文件} targetFile 
 */
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
