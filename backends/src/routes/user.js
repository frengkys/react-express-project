import express from 'express';
import test from '../controller/user.ctrl';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(test.getAll)

export default router