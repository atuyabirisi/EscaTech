import { z } from 'zod';

export const clientSchema = z.object({
    client: z.string().min(1, { message: "client details are required" })
});

export type InvoiceClient = z.infer<typeof clientSchema>


export type Client = {
    _id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
  }