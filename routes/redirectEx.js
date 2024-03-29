const express = require('express')
let router = express.Router()

let redirectFrom = ''
router.get('/old', (req, res) =>{
    if (redirectFrom === 'new') {
        redirectFrom = ""
        res.send(`This is Old !`)
    } else {
        redirectFrom = "old"
        res.redirect('/redirectEx/new')
    }    
})
router.get('/new', (req, res) => {
    if (redirectFrom === 'old') {
        redirectFrom = ""
        res.send(`This is New !`)
    } else {
        redirectFrom = "new"
        res.redirect('/redirectEx/old')
    } 
})
module.exports = router