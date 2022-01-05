import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';
const router = express.Router();

/* //localhost:5000 */
router.get('/', getPosts);
/* adding more routes */
router.post('/', createPost);
export default router;
