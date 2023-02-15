const router = require('express').Router()
const piesCtrl = require('../controllers/pies.js')

router.post('/', piesCtrl.create)
router.get('/', piesCtrl.index)

module.exports = router