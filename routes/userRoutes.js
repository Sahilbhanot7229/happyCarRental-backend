const express = require('express');
const router = express.Router();
const { getUser,updateProfile ,changePassword} = require('../controllers/userController');

router.post('/getuser', getUser);
router.put('/profile', updateProfile);
router.put('/change-password', changePassword);


module.exports = router;
