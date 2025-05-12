import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import { studentZodSchema } from "./student.validation.zod";

const createStudent = async (req:Request, res:Response) => {
   try {
    const {student:studentData} = req.body;
    const validateStudentData = await studentZodSchema.parse(studentData);
    const result = await StudentServices.createStudentIntoDB(validateStudentData);

    res.status(200).json({
        status: true,
        message: 'Student created successfully',
        data: result
    })
   } catch (error) {
    res.status(500).json({
        status: false,
        message: 'Failed to create student',
        error: error
    })
   }

}

const getAllStudent = async (req:Request, res:Response) => {
    try {
        const result = await StudentServices.getAllStudent();
        res.status(200).json({
            status: true,
            message: 'Student fetched successfully',
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getSingleStudent = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const result = await StudentServices.getSingleStudent(id);
        res.status(200).json({
            status: true,
            message: 'Student fetched successfully',
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent
}
