const router = require('express').Router()
const piesCtrl = require('../controllers/pies.js')

router.post('/', piesCtrl.create)

module.exports = router