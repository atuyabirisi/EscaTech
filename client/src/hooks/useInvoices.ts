import useData from "./useData";
import { InvoiceData } from "../types/typeDefinitions";

const useInvoices = () =>  useData<InvoiceData>('/invoice');

export default useInvoices;