import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";


const getAllStudent = catchAsync(async (req:Request, res:Response) => {
        const result = await StudentServices.getAllStudent();
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student fetched successfully',
            data: result,
        }
        )
})


const getSingleStudent = catchAsync(async (req:Request, res:Response) => {
    
        const { id } = req.params;
        const result = await StudentServices.getSingleStudent(id);
       sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student fetched successfully',
            data: result,
        }
        )
})

export const StudentController = {
    getAllStudent,
    getSingleStudent
}
