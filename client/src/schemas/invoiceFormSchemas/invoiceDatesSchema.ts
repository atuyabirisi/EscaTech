import { z} from "zod";

const dateSchema = z
  .string()
  .refine(
    (value) => !isNaN(Date.parse(value)), 
    { message: "Invalid date format" }
  )
  .transform((value) => new Date(value));

export const InvoiceDateSchema =  z.object({
    status: z.enum(["closed", "open"], { message: "Invoice status required"}),
    opendate: dateSchema.refine(dateValue => dateValue <= new Date(), { message: "Invalid invoice open date"}),
    duedate: dateSchema.refine(dateValue => dateValue >= new Date(), { message: `Invalid due date`})
});

export type InvoiceDate = z.infer<typeof InvoiceDateSchema>


