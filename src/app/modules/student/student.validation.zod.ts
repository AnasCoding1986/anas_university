import { z } from "zod";

export const userNameZodSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  middleName: z.string({ required_error: "Middle name is required" }),
  lastName: z.string({ required_error: "Last name is required" })
});

export const guardianZodSchema = z.object({
  fatherName: z.string({ required_error: "Father name is required" }),
  fatherOccupation: z.string({ required_error: "Father occupation is required" }),
  fatherContactNo: z.string({ required_error: "Father contact no is required" }),
  motherName: z.string({ required_error: "Mother name is required" }),
  motherOccupation: z.string({ required_error: "Mother occupation is required" }),
  motherContactNo: z.string({ required_error: "Mother contact no is required" })
});

export const localGuardianZodSchema = z.object({
  name: z.string({ required_error: "Local guardian name is required" }),
  occupation: z.string({ required_error: "Occupation is required" }),
  contactNo: z.string({ required_error: "Contact number is required" }),
  address: z.string({ required_error: "Address is required" })
});

export const studentZodSchema = z.object({
  password: z.string().max(100).optional(),

  student: z.object({
    name: userNameZodSchema,
    gender: z.enum(["male", "female"], {
      required_error: "Gender is required",
      invalid_type_error: "Gender must be either male or female"
    }),
    dateOfBirth: z.date({ required_error: "Date of birth is required" }),
    email: z.string({ required_error: "Email is required" }).email("Invalid email"),
    contactNo: z.string({ required_error: "Contact number is required" }),
    emergencyContactNo: z.string({ required_error: "Emergency contact number is required" }),
    bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
      required_error: "Blood group is required",
      invalid_type_error: "Invalid blood group"
    }),
    presentAddress: z.string({ required_error: "Present address is required" }),
    permanentAddress: z.string({ required_error: "Permanent address is required" }),
    guardian: guardianZodSchema,
    localGuardian: localGuardianZodSchema,
    profileImage: z.string().optional()
  })
});

