import { Router } from 'express';
import { signin, signup } from '../controllers/user.js';
const router = Router();

/* //localhost:5000 */
router.post('/signin', signin);
router.post('/signup', signup);
export default router;
