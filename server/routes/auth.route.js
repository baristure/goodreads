const router = require('express').Router();
let User = require('../models/user.model');


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({username,password});
    newUser.save()
        .then(() => res.send('Registered successfully'))
        .catch(err => res.status(400).json('Error Message: ' + err));
})

router.route('/login').post((req, res) => {
    const username = req.body.username;

    User.findOne({
            username
        })
        .then(user => {
            if (!user) {
                console.log('username error')
               // return res.status(404).json('Username can not found!!')
            } else {
                const logined = {
                    username: user.username,
                    password: user.password
                }
                const passwordCheck=req.body.password;
                if (user.password == passwordCheck) {
                
                    console.log('Login success')
                    return res.redirect('/')
                } else {
                    console.log('wrong password')
                    //return res.status(404).json('Password is wrong. Try Again!!')
                }
            }
        })
        .catch(err => res.status(400).json('Error Message: ' + err));
})


module.exports = router;