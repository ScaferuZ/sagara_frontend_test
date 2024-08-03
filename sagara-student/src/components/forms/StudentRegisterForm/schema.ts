import { z } from "zod"

const RegisterSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  instance: z.string().min(3, "Instance is too short"),
  password: z.string().min(6, "Password is too short"),
  confirmPassword: z.string().min(6, "Password is too short"),
})

export default RegisterSchema
