import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterService = async (payload:TAcademicSemester)=> {
    const result = await AcademicSemester.create(payload);
    if (!result) {
        throw new Error('Failed to create academic semester');
    }
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterService,
};