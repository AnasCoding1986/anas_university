import { z } from "zod";
import { academicSemesterCode, academicSemesterName, months } from "./academicSemester.const";

const createAcademicSemesterValidationSchema = z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]], 
        {
            required_error: "Academic semester name is required",
            invalid_type_error: "Invalid academic semester name"
        }
    ),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], 
        {
            required_error: "Academic semester code is required",
            invalid_type_error: "Invalid academic semester code"
        }
    ),
    year: z.string({
        required_error: "Academic semester year is required",
        invalid_type_error: "Invalid academic semester year"
    }),
    startMonth: z.enum([...months] as [string, ...string[]],
        {
            required_error: "Academic semester start month is required",
            invalid_type_error: "Invalid academic semester start month"
        }
    ),
    endMonth: z.enum([...months] as [string, ...string[]],
        {
            required_error: "Academic semester end month is required",
            invalid_type_error: "Invalid academic semester end month"
        }
    )
});

const updateAcademicSemesterValidationSchema =
    createAcademicSemesterValidationSchema.partial().refine((data) => {
        if (data.name && data.code) {
            const academicSemesterNameCodeMapper: { [key: string]: string } = {
                Autumn: '01',
                Spring: '02',
                Summer: '03',
            };
            return academicSemesterNameCodeMapper[data.name] === data.code;
        }
        return true;
    }, {
        message: "Invalid semester code for the given semester name",
    });

export const academicSemesterValidation = {
    createAcademicSemesterValidationSchema,
    updateAcademicSemesterValidationSchema
};