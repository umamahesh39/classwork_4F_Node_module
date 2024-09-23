const path=require('path')

const pathfile="C:\\Users\vignan\Desktop\path.js";

console.log(path.dirname(pathfile))

console.log(path.basename(pathfile))

console.log(path.extname(pathfile))

const newpathfile = path.join(path.dirname(pathfile), 'os.js')
console.log(newpathfile)