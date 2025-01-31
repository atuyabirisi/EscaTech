import { z } from "zod"


/*###--INVOICEITEMS--### */

export const invoiceItemsSchema = z.object({
    description: z.string().min(1,{ message: "service/product description is required"}),
    quantity: z.number().gte(1, { message: "quantity is required"}),
    unitPrice: z.number().gte(1, { message: "quantity is required"}),
    subtotal: z.number(),
});


/*###--INVOICE DATES--### */

const dateSchema = z
  .string()
  .refine(
    (value) => !isNaN(Date.parse(value)), 
    { message: "Invalid date format" }
  )
  .transform((value) => new Date(value));

export const invoiceDateSchema =  z.object({
    status: z.enum(["closed", "open"], { message: "Invoice status required"}),
    opendate: dateSchema.refine(dateValue => dateValue <= new Date(), { message: "Invalid invoice open date"}),
    duedate: dateSchema.refine(dateValue => dateValue > new Date(), { message: `Invalid due date`}),
    service: z.enum(["installation", "maintainance", "supplies"], { message: "Service info is required"}),
});


/*###--CLIENT SCHEMA--### */

export const invoiceClientSchema = z.object({
    client: z.string().min(1, { message: "client details are required" }),
});

export const clientRegschema = z.object({
    name: z.string().min(1,{ message: "Invalid client name"}),
    phone: z.string().regex(/^\d{10}$/, { message: "Invalid phone number"}),
    email: z.string().email({message: "Invalid email address"}),
    address: z.string().min(1, { message: "Invalid address"}),
});


/*###--PAYMENT FORM SCHEMA--### */

 export const invoicePaymentSchema= z.object({
  invoice_id: z.string().min(1, { message: "Inovoice_id is required" }),
  amount_due: z.number().min(1, { message: "Invalid amount due" }),
  payed_amount: z.number().min(1, { message: "Invalid payed amount" }),
  payment_date: dateSchema.refine(dateValue => dateValue > new Date(), { message: "Invalid payment date"}),
  payment_method: z.enum(["bank, mpesa"], { message: "Payment method is required"}),
  bank: z.string().optional(),
  transaction_reference: z.string().min(1, { message: "transaction reference is required"})
});




export type ClientRegType = z.infer<typeof clientRegschema>
export type InvoiceItemsType = z.infer<typeof invoiceItemsSchema>
export type InvoiceDatesType = z.infer<typeof invoiceDateSchema>
export type InvoiceClient = z.infer<typeof invoiceClientSchema>
export type InvoicePaymentFormType = z.infer<typeof invoicePaymentSchema>