const router = require('express').Router()
const piesCtrl = require('../controllers/pies.js')

router.post('/', piesCtrl.create)
router.get('/', piesCtrl.index)
router.put('/:id', piesCtrl.update)
router.delete('/:id', piesCtrl.delete)

module.exports = router