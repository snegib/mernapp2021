import express from 'express';
import { signin, signup } from '../controllers/user.js';
const router = express.Router();

/* //localhost:5000 */
router.post('/signin', signin);
router.post('/signup', signup);
export default router;
