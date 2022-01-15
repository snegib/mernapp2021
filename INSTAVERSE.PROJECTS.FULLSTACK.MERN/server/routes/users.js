import { Router } from 'express';
import { login, signup } from '../controllers/users.js';
// import auth from '../middleware/auth.js';
const router = Router();

/* //localhost:5000 */

router.post('/login', login);
router.post('/signup', signup);
export default router;

// app.get("/:id", (req, res) => {
//     " your API logic"
//    });
