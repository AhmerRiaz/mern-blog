import express from 'express'
import { signUp } from '../controllers/auth.controller.js';
import { signIn } from '../controllers/auth.controller.js';
import { googleAuth } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/google', googleAuth);



export default router;