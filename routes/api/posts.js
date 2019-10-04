const express = require('express')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const router = express.Router()

router.get('/', (req, res) => res.send('Posts route'))

module.exports = router
