import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import { validateRequest } from '../../middlewire/validateRequest';
import { academicSemesterValidation } from './academicSemesterValidation';

const router = express.Router();

router.post('/create-semester',  validateRequest(academicSemesterValidation.createAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester)

router.get('/:id', AcademicSemesterController.getSingleAcademicSemester);

router.patch('/:id',  AcademicSemesterController.updateAcademicSemester);

router.get('/', AcademicSemesterController.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;