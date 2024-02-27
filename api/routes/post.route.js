import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost } from '../controllers/post.controller.js';
import { getposts } from '../controllers/post.controller.js';

const router = express.Router();


router.post('/create-post', verifyToken, createPost);
router.get('/getposts', getposts);

export default router;