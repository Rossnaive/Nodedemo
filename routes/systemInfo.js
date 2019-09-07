const express = require('express')
let router = express.Router()
const os = require('os')
router.get('/', (req, res) =>{
    let {type = ''} = req.query   
    res.setHeader('Content-Type', 'text/html; charset=utf-8') 
    switch(type.toLowerCase()) {
        case 'os':
            const osPlatform = os.platform()
            const osType = os.type()            
            res.send(`<h1 style="color: blue">Operating system's platform : ${osPlatform}, type: ${osType}</h1>`)
            break
        case 'framework':
            res.send(`<h1 style="color: blue">This is test framework</h1>`)
            break
        case 'date':
            let currentDate = new Date()
            res.send(`<h1>Current date is : ${currentDate.toUTCString()}</h1>`)
            break
        default:
            res.send(`<h1 style="color: red">wrong type</h1>`)
    }
})
module.exports = router