const express = require('express')
const router = express.Router()

const Authenticator = require('./Authenticator')
const { uploadMulter } = require('../controllers/Utilities/ImageUploader')
const { register, login, getCurrentUser, getUsers, updateUser, tryMailer, requestPassword, requestPasswordHandler } = require('../controllers/Users/UserController')

router.get('/my-info', Authenticator, getCurrentUser)
router.get('/', getUsers)

router.post('/request-recover', requestPassword)
router.post('/recover-handler', requestPasswordHandler)
router.post('/register', uploadMulter.single('profileImg'), register)
router.post('/login', login)

router.put('/update', Authenticator, updateUser)

module.exports = router