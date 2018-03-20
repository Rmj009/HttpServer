// const http = require('http')

// const server = http.createServer((req,res)=>{

//     console.log('someone ask for')
//     res.writeHead(200.{'content-type':'text/plain'});
//     res.write('you already normal in touch')
//     // 確保正常連線
//     res.end()
// })

// server.listen(3000)

// console.log('http://127.0.0.1:3000')


const http = require('http')
const port = 3000 //

const server = http.createServer((req, res) => {
    console.log('keep in touch')

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('you had jump in')
        // 確保網卡的buffer都送出去
    res.end()
})

server.listen(3000)
console.log('http://127.0.0.1:3000')