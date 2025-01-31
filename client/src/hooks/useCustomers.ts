import { Client } from "../types/clientType";
import { useData } from "./useData";

export function useCustomers() {
    const { data } = useData<Client>(`/register_client`);
    
    const noOfCustomers = data.length;
    const customerData = data;

    return { customerData, noOfCustomers };
}
