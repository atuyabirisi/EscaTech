import { useState } from "react";
import axios from "axios";
import { RegistrationData } from "../components/auth/schemas/userRegistrationSchema";
import apiClient from "../utilities/apiClient";

interface useRegisterUserReturn {
    registerUser: (data: RegistrationData) => Promise<void>;
    loading: boolean;
    error: string | null;
    success: boolean;
}


export const useRegisterUser = (): useRegisterUserReturn  => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const registerUser = async ( data: RegistrationData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        apiClient
            .post("/register", data)
            .then(response =>  {
                response.status === 201 && setSuccess(true);
                setLoading(false);
            })
            .catch(error => {
                axios.isAxiosError(error) && setError(error.response?.data);
                setLoading(false);
            });
           
       
    }
    return { registerUser, loading, error, success }
}