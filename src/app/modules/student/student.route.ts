import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);

export const StudentRoute = router;