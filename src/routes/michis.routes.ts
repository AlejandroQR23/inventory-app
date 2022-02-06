import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/michis', (req, res) => {
  res.send('michis');
});

// authenticated route
router.post('/michis', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('done');
});

export default router;
