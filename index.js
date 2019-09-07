const express = require('express')
const app = express()
const PORT = 8080
//Router
const systemInfo = require('./routes/systemInfo')
const redirectEx = require('./routes/redirectEx')
const books = require('./routes/books')

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`)
})
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(`<h1 style="color: blue;">Hello world !</h1>`)
})
//http://localhost:8080/aboutus
app.get('/aboutus', (req, res) => {
    res.send('This is about page ')
})
app.use('/systemInfo', systemInfo)
app.use('/redirectEx', redirectEx)
app.use('/books', books)
app.use((req,res)=>{
    const http404file = path.join(__dirname) + '/error404.html'
    res.status(404).sendFileile(http404file)
})