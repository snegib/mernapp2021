import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
import auth from "../midleware/auth.js"
const router = express.Router();

/* //localhost:5000 */
router.get('/', getPosts);
/* adding more routes */
router.post('/', auth, createPost);
/* patch for updating files */
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
export default router;
