import { Schema, model } from "mongoose";
import { Guardian, LocalGuardian, TStudent, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: String,
  middleName: String,
  lastName: String
});

const guardianSchema = new Schema<Guardian>({
  fatherName: String,
  fatherOccupation: String,
  fatherContactNo: String,
  motherName: String,
  motherOccupation: String,
  motherContactNo: String
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: String,
  occupation: String,
  contactNo: String,
  address: String
});

const studentSchema = new Schema<TStudent>({
  id: { type: String, unique: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: userNameSchema,
  gender: { type: String, enum: ["male", "female"], required: true },
  dateOfBirth: String,
  email: { type: String, unique: true, required: true },
  contactNo: String,
  emergencyContactNo: String,
  bloodGroup: { 
    type: String, 
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], 
    required: true 
  },
  presentAddress: String,
  permanentAddress: String,
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: String,
});

export const Student = model<TStudent>('Student', studentSchema);
