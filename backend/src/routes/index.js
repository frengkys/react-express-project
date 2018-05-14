import express from 'express';
import user from './user';
import student from './student';

const router = express.Router(); // eslint-disable-line new-cap

router.use('/test', user);
router.use('/student', student);

export default router;