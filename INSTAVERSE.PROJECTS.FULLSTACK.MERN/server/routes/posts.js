import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';
const router = express.Router();

/* //localhost:5000 */
router.get('/', getPosts);
/* adding more routes */
router.post('/', createPost);
/* patch for updating files */
router.patch('/:id', updatePost);
export default router;
