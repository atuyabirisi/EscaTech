export type InvoicePaymentType = {
    invoice_id: string,
    amount_due: number,
    payed_amount: number,
    payment_date: string,
    payment_method: string,
    bank_name: string,
    transaction_reference: string,
    outstanding_balance: number,
    credit_balance: number,
}


export type InvoicePaymentFormType = {
    invoicePaymentFormData: InvoicePaymentType
}