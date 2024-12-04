import { z } from "zod"

export const invoiceItemsSchema =z.object({
    description: z.string().min(1,{ message: "service/product description is required"}),
    quantity: z.number().gte(1, { message: "quantity is required"}),
    unitPrice: z.number().gte(1, { message: "quantity is required"}),
    subtotal: z.number()
});

export type InvoiceItemsType = z.infer<typeof invoiceItemsSchema>