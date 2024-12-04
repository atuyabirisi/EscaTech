import { z } from "zod"

export const clientRegschema = z.object({
    name: z.string().min(1,{ message: "Invalid client name"}),
    phone: z.string().regex(/^\d{10}$/, { message: "Invalid phone number"}),
    email: z.string().email({message: "Invalid email address"}),
    address: z.string().min(1, { message: "Invalid address"})
});

export type ClientRegType = z.infer<typeof clientRegschema>
