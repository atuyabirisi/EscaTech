import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required!" })
      .min(6, { message: "Password must contain at least 6 character(s)" }),
  });

  export const signUpSchema = loginSchema
  .extend({
    username: z.string().min(1, { message: "Username is required" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
  });