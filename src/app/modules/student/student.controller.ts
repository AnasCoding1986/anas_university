import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const getAllStudent = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const result = await StudentServices.getAllStudent();
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student fetched successfully',
            data: result,
        }
        )
        }
     catch (error) {
        next(error);
    }
}


const getSingleStudent = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { id } = req.params;
        const result = await StudentServices.getSingleStudent(id);
       sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student fetched successfully',
            data: result,
        }
        )
        
    } catch (error) {
        next(error);
    }
}

export const StudentController = {
    getAllStudent,
    getSingleStudent
}
