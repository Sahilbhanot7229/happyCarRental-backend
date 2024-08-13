const express = require('express');
const router = express.Router();
const { getUser, updateProfile, changePassword,adminUpdateProfile, addUser, deleteUser,getUsers } = require('../controllers/userController');

router.post('/getuser', getUser);
router.put('/profile', updateProfile);
router.put('/adminUpdateProfile', adminUpdateProfile);

router.put('/change-password', changePassword);
router.post('/adduser', addUser);
router.delete('/deleteuser', deleteUser);
router.get('/getUsers',getUsers)
module.exports = router;
