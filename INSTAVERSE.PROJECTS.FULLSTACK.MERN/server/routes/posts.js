import express from 'express';
import { getPosts } from '../controllers/posts.js';
const router = express.Router();

/* //localhost:5000 */
router.get('/', getPosts);

export default router;
