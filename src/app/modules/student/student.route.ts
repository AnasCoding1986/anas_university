import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getSingleStudent);

export const StudentRoute = router;

// S123456