const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

app.get('/', (req, res) => {
    res.send('<h1>Socket.io Chat Basic</h1>')
})

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})