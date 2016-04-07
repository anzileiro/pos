var express         = require('express')
,   userController  = require('../controllers/userController')
,   router          = express.Router()

router.post('/users', userController.userController.register);
router.post('/users/attendance', userController.userController.attendance);

module.exports = {
    router: router
}