const os=require('os')

console.log("platform:",os.platform())

console.log("total memory:",os.totalmem())

console.log("free memory:",os.freemem())

console.log("NO of core:",os.cpus().length)

