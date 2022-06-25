import { Router } from 'express';
import passport from 'passport';
import { createMichi, deleteMichi, getMichiById, getMichis, updateMichi } from '../controllers/michis.controller';

const router = Router();

router.get('/', getMichis);

router.get('/:id', getMichiById);

// * authenticated routes
router.post('/', passport.authenticate('jwt', { session: false }), createMichi);

router.put('/:id', passport.authenticate('jwt', { session: false }), updateMichi);

router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteMichi);

export default router;
