const os = require('node:os');

console.log("CPU架构:", os.arch())
console.log("CPU信息:", os.cpus())
console.log("当前目录:", os.homedir())
console.log("当前用户:", os.userInfo())


