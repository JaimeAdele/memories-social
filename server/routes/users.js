import express from 'express';

import { signin, signup, googleSignup, googleLogin } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/googleSignup', googleSignup);
router.post('/googleLogin', googleLogin);

export default router;