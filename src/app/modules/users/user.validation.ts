import { z } from "zod";

const userValidationSchema = z.object({
    id: z.string(),
    password: z.string().max(20, { message: "Password must be at most 20 characters long" }),
    needPasswordChange: z.boolean().optional().default(true),
    role: z.enum(['admin', 'student', 'faculty'], {
        required_error: "Role is required",
        invalid_type_error: "Role must be either admin, student or faculty"
    }),
    status: z.enum(['in-progress', 'blocked'], {
        required_error: "Status is required",
        invalid_type_error: "Status must be either in-progress or blocked"
    }).default('in-progress'),
    isDeleted: z.boolean().default(false),
})

export const userValidation={
userValidationSchema
}
