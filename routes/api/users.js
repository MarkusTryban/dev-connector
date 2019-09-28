const express = require('express')

const router = express.Router()
const { check, validationResult } = require('express-validator')

router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please use a password that is a minimum of 6 char'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.send('User route')
  }
)

module.exports = router
