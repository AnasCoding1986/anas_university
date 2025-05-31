import config from "../../config";
import { TStudent } from "../student/student.interface";
import { User } from "./user.model";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  if (!studentData) {
    throw new Error("Student data is required");
  }

  const userData: Partial<TUser> = {};

  userData.id = `stu-${Date.now()}`;
  userData.password = password || config.default_password;
  userData.role = 'student';

  try {
    const newUser = await User.create(userData);

    if (!newUser || !newUser._id) {
      throw new Error("Failed to create user");
    }

    studentData.id = newUser.id; // Now safe
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);

    if (!newStudent || !newStudent._id) {
      throw new Error("Failed to create student");
    }

    return {
      user: newUser,
      student: newStudent,
    };
  } catch (error) {
    console.error("Error in createStudentIntoDB:", error);
    throw error;
  }
};


export const UserServices = {
  createStudentIntoDB,
};
