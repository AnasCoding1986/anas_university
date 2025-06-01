import { model, Schema } from "mongoose";
import { TAcademicSemester} from "./academicSemester.interface";
import { academicSemesterCode, academicSemesterName, months } from "./academicSemester.const";

const academicSemesteSchema = new Schema<TAcademicSemester>({
    name: { type: String, required: true, enum: academicSemesterName },
    code: { type: String, required: true, enum: academicSemesterCode },
    year: { type: String, required: true },
    startMonth: { type: String, required: true, enum: months },
    endMonth: { type: String, required: true, enum: months }
    }, {
    timestamps: true
})

academicSemesteSchema.pre('save', async function (next) {
    const isSemesterExist = await AcademicSemester.findOne({
        name: this.name,
        year: this.year
    });
    if (isSemesterExist) {
        throw new Error('Academic semester already exists for this year');
    }
    next();
}
);


export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesteSchema);