import { useState } from "react";
import apiClient from "../utilities/apiClient";

interface FormData {
    email: string;
    password: string;
}

interface UseUpdatePasswordReturn {
    performUpdate: (data: FormData) => void;
    isLoading: boolean;
    error: string | null;
}

export const updateResource = (): UseUpdatePasswordReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]= useState<string | null> (null);

    const performUpdate = (formdata: FormData) => {
        setIsLoading(true);
        apiClient.put("/register", formdata).then(res => {
            console.log(res.data);
            setIsLoading(false);
        }).catch(error =>{
            setError(error);
            setIsLoading(false);
        })
    }
    return { performUpdate, isLoading, error}
}