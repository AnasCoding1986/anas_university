import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterService = async (payload:TAcademicSemester)=> {
    type TAcademicSemesterNameCodeMapper = {
        [key: string]: string;
    };
    const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
        Autumn: '01',
        Spring: '02',
        Summer: '03',
    };
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code for the given semester name');
    }

    const result = await AcademicSemester.create(payload);
    if (!result) {
        throw new Error('Failed to create academic semester');
    }
    return result;
}

const getAllAcademicSemesters = async () => {
    const result = await AcademicSemester.find();
    if (!result) {
        throw new Error('No academic semesters found');
    }
    return result;
}

const getSingleAcademicSemester = async (id: string) => {
    const result = await AcademicSemester.findOne({ _id: id });
    if (!result) {
        throw new Error('Academic semester not found');
    }
    return result;
}

const updateAcademicSemester = async (id: string, payload: Partial<TAcademicSemester>) => {
  const academicSemesterNameCodeMapper: { [key: string]: string } = {
    Autumn: '01',
    Spring: '02',
    Summer: '03',
  };

  // Fetch current data for validation if only one field is present
  const existingSemester = await AcademicSemester.findById(id);
  if (!existingSemester) {
    throw new Error('Academic semester not found');
  }

  const nameToCheck = payload.name ?? existingSemester.name;
  const codeToCheck = payload.code ?? existingSemester.code;

  if (academicSemesterNameCodeMapper[nameToCheck] !== codeToCheck) {
    throw new Error('Invalid semester code for the given semester name');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new Error('Failed to update academic semester');
  }

  return result;
};


export const AcademicSemesterServices = {
    createAcademicSemesterService,
    getAllAcademicSemesters,
    getSingleAcademicSemester,
    updateAcademicSemester
};