import express from 'express';
import student from '../controller/student.ctrl';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .get(student.getAll)
    .post(student.store)
    
router.route('/:id')
    .patch(student.update)
router.route('/:id')
    .delete(student.remove)

router.route('/student-status')
    .get(student.getStudentStatus)

export default router