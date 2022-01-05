import express from 'express';
const router = express.Router();

/* //localhost:5000 */
router.get('/', (req, res) => {
  res.send('Post works!');
});

export default router;
