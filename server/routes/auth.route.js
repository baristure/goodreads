const express = require('express')
const router = express.Router()

let UserService = require('../services/user-service');

router.post('/add', async (req, res) => {
    try {
        const user = await UserService.add(req.body)
        res.send(user)
    } catch (err) {
        res.status(404)
        res.send({
            error: "Post doesn't exist!" + err
        })
    }
})

router.get('/login/:username', async (req, res) => {
    try {
        const user = await UserService.findByParams(req.body)
        if (!res.send(user)) {
            console.log('wrong username')
        } else {
            res.send(user)
            if (user.password == req.body.password) {
                console.log('Login success')
                return res.redirect('/')
            } else {
                console.log('wrong password')
                //return res.status(404).json('Password is wrong. Try Again!!')
            }
        }
    } catch (err) {
        res.status(404)
        res.send({
            error: "Post doesn't exist!" + err
        })
    }
})


module.exports = router;