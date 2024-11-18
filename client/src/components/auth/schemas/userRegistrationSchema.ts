import { z} from 'zod';

export const userRegSchema = z.object({
    username: z.string().min(1, { message: "Username is required"}).max(50, { message: "Username cannot exceed 50 characters"}),
    email: z.string().email({message: "Invalid email address"}),
    phone: z.string().regex(/^\d{10}$/, {message: "Invalid phone number"})
})

export type RegistrationData = z.infer<typeof userRegSchema>
