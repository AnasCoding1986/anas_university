import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import { validateRequest } from '../../middlewire/validateRequest';
import { academicSemesterValidation } from './academicSemesterValidation';

const router = express.Router();

router.post('/create-semester',  validateRequest(academicSemesterValidation.createAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester)

export const AcademicSemesterRoutes = router;