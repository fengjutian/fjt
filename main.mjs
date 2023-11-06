import process from 'process';
import { getFilesAndFoldersInDir } from './lib/ls.mjs';
import { service } from './lib/service.mjs'

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
        case 'service':
            service()
            break;
        case 'list':
            console.log('list');
            break;
        default:
            console.log('请输入正确的参数');
            process.exit(1);
    }
}

// console.log('args', args);
