import { Request, Response } from "express";
import { StudentServices } from "./student.service";


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
    getAllStudent,
    getSingleStudent
}
