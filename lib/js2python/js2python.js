/**
 * js调用python脚本
 */
const spawn=require('child_process').spawn
const py = spawn('python',['a.py'])


py.stdout.on('data', (res) => {
    let data = res.toString();
    console.log('stdout: ',data)
})

py.stderr.on('data', (res) => {
    let data = res.toString();
    console.log('stderr: ',data)
})

py.on('close', (code) => {
  console.log(`子进程退出：退出代码code ${code}`);
});

console.log('end.')
