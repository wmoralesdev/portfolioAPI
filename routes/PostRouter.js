const express = require('express')
const { createPost } = require('../controllers/Posts/PostsController')
const Authenticate = require('./Authenticator')
const router = express.Router()

router.post('/create', Authenticate, createPost)

module.exports = router