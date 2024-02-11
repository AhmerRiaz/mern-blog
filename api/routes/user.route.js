import express from 'express'
import { user } from '../controllers/user.controller.js';
import { userUpdate } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', user);
router.put('/update/:userId', verifyToken , userUpdate);

export default router;