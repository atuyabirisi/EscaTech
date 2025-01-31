import { useState } from "react";
import { InvoicePaymentType } from "../types/invoicePaymentType"
import apiClient from "../utilities/apiClient";

interface UsePaymentReturn {
    payInvoice: (paymentInfo: InvoicePaymentType) => void;
    isLoading: boolean;
    error: string | null;
}

export const usePayInvoice = (): UsePaymentReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const payInvoice = (paymentInfo: InvoicePaymentType) => {
        setIsLoading(true);

        apiClient
            .post("/pay_invoice", paymentInfo)
            .then(res => console.log(res.data))
            .catch(error => setError(error.data))
            .finally(() => setIsLoading(false));
    }
    return { payInvoice, isLoading,error}
}