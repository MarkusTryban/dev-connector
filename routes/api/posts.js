const express = require('express')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const router = express.Router()

router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  }
)

module.exports = router
