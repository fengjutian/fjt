import process from 'process';
import { getFilesAndFoldersInDir } from './lib/ls.mjs';
import { service } from './lib/service.mjs';
import { readFile } from './lib/cat.mjs';
import { zip } from './lib/zlib.mjs';

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
// })

const _biasArgv = 1

const args = process.argv.slice(0)
console.log('args', args.length);

if (args.length < 2) {
    console.log('请输入参数');
    process.exit(1);
} else {
    switch (args[1 + _biasArgv]) {
        case 'curl':
            console.log('curl');
            break;
        case 'ls':
            getFilesAndFoldersInDir(args[2 + _biasArgv]);
            break;
        case 'zip':
            zip(args[2 + _biasArgv], args[3 + _biasArgv]);
            break;
        case 'service':
            service()
            break;
        case 'cat':
            readFile(args[2 + _biasArgv])
            break;
        default:
            console.log('输入参数有误');
            process.exit(1);
    }
}
