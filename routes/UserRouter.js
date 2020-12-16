const express = require('express')
const router = express.Router()

const { register } = require('../controllers/Users/UserController')

router.post('/register', register)

module.exports = router