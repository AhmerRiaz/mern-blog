import express from 'express'
import { user } from '../controllers/user.controller.js';
import { userUpdate } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser } from '../controllers/user.controller.js';
import { userSignOut } from '../controllers/user.controller.js';
import { getuser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', user);
router.put('/update/:userId', verifyToken , userUpdate);
router.delete('/delete/:userId', verifyToken , deleteUser);
router.post('/signout', userSignOut)
router.get('/getusers', verifyToken, getuser);
export default router;