import { ClientRegType } from "../schemas/invoiceClientShema";
import { useData } from "./useData";

export function useCustomers() {
    const { data } = useData<ClientRegType>('/register_client');
    
    const noOfCustomers = data.length;

    return { data, noOfCustomers };
}