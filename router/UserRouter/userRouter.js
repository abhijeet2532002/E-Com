import express from 'express';
import userController  from '../../controller/userController/userController.js'; 
import passport from 'passport';

const {addUser,deleteUser,getAllUSer,getSingleUser,updateUser} = userController;

const router = express.Router();
router.get('/users',passport.authenticate('jwt',{session: false}),getAllUSer);
router.post('/user',addUser)

export default router;