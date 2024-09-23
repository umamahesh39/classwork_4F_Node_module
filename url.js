const url=require('url')

const address="http://127.0.0.0:8000/index.html?namr=Tony&agr=20"


const parsedaddress = url.parse(address, true)

console.log(parsedaddress)

console.log("Hostname: "+parsedaddress.hostname)

console.log("portnumber: "+parsedaddress.port)

console.log("pathname:" +parsedaddress.pathname)

console.log("parameter:"+ parsedaddress.query.name)


console.log("parameter:"+ parsedaddress.query.age)
console.log("name:",name)
console.log("age:",age)

