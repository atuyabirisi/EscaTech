import { useState } from "react";
import apiClient from "../utilities/apiClient";
import axios from "axios";

export interface LoginCredentials {
    email: string;
    password: string;
}

interface useLoginReturn {
    login: (credentials: LoginCredentials) => any;
    error: string | null;
    loading: boolean;
}

export const useLogin = ():useLoginReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = ( credentials: LoginCredentials) => {
        apiClient
            .post("/login", credentials)
            .then(res => {
                const { data }  = res;
                localStorage.setItem("authToken", data);
                setLoading(false);
                window.location.href = "/dashboard";
            })
            .catch((error) => {
                axios.isAxiosError(error) && setError(error.response?.data)
            })
    }
    return { login, error, loading}
}