import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (student: TStudent) => {
    const result = await Student.create(student);
    return result;
}

const getAllStudent = async () => {
    const result = await Student.find();
    return result;
}

const getSingleStudent = async (id: string) => {
    const result = await Student.findOne({ id });
    return result;
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudent,
    getSingleStudent
}