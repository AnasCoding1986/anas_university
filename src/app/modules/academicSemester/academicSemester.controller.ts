import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AcademicSemesterServices } from "./academicSemester.service";


const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterService(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semester created successfully",
        data: result, // Assuming req.body contains the created semester data
    });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemesters();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semesters fetched successfully",
        data: result,
    });
}
);

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AcademicSemesterServices.getSingleAcademicSemester(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semester fetched successfully",
        data: result,
    });
}
);

const updateAcademicSemester = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AcademicSemesterServices.updateAcademicSemester(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semester updated successfully",
        data: result,
    });
}
);

export const AcademicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemesters,
    getSingleAcademicSemester,
    updateAcademicSemester
};