import useData from "./useData";
import { Client } from "../types/typeDefinitions";

const useClients = () =>  useData<Client>('/client-registration');

export default useClients;