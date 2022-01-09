import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
const router = express.Router();

/* //localhost:5000 */
router.get('/', getPosts);
/* adding more routes */
router.post('/', createPost);
/* patch for updating files */
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;
