import { Schema, model } from "mongoose";
import { Guardian, LocalGuardian, TStudent, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true }
  },
  { _id: false }
);

const guardianSchema = new Schema<Guardian>(
  {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String },
    motherContactNo: { type: String, required: true }
  },
  { _id: false }
);

const localGuardianSchema = new Schema<LocalGuardian>(
  {
    name: { type: String, required: true },
    occupation: { type: String },
    contactNo: { type: String, required: true },
    address: { type: String, required: true }
  },
  { _id: false }
);

const studentSchema = new Schema<TStudent>({
  
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: userNameSchema,
  gender: { type: String, enum: ["male", "female"], required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, unique: true, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: true
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String }
});

export const Student = model<TStudent>("Student", studentSchema);
