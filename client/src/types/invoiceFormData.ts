import { InvoiceItemsType } from "../schemas/invoiceFormSchemas/invoiceItemsSchema"
  
export type InvoiceFormData = {
      status: string,
      opendate: string,
      duedate: string ,
      service: string,
      client: string,
      invoiceItems: InvoiceItemsType[],
      vat: number,
      total: number,
      grandTotal: number,
}

