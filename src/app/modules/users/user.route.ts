import express from 'express';
import { UserController } from './user.controller';
import { studentZodSchema } from '../student/student.validation.zod';
import { validateRequest } from '../../middlewire/validateRequest';

const router = express.Router();

router.post('/create-student',validateRequest(studentZodSchema), UserController.createStudent)

export const UserRoute = router;


