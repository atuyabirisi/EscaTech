import { Client } from "./clientType";

export type InvoiceItem = {
    description: string;
    quantity: number;
    unitPrice: number;
    amount: number;
  };

export type InvoiceData = {
  _id: string;
  invoice_id: string;
  status: string;
  opendate: string;
  duedate: string;
  client: Client;
  invoiceItems: InvoiceItem[];
  vat: number;
  total: number;
  outstandingBalance: number;
  grandTotal: number;
  createdAt: string;
};