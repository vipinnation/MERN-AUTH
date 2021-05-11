const express = require('express');
const router = express.Router();
const SignUpController = require('../App/http/Controller/SignupController')
const loginController = require('../App/http/Controller/LoginController');
const { checkLogin } = require('../App/http/middleware/checkLogin');


router.post('/login', loginController().index)
router.post('/signup', SignUpController().index)

router.get('/profile', checkLogin,(req, res) => {
    res.status(200).json({message:"Authorized"})
})

module.exports = router

