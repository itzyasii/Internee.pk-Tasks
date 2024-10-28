const express = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')


const router = express.Router();


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', auth, userController.getUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);



module.exports = router;