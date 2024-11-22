import { useState } from "react";
import apiClient from "../utilities/apiClient";
import axios from "axios";

export const createResource = <Type>() => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const postRequest = (endpoint: string, data:Type) => {
        setIsLoading(true);
        apiClient.post(endpoint, data).then(res => {
            if(res.status === 201) setSuccess(true);
            setIsLoading(false)
        }).catch(error => {
            axios.isAxiosError(error) && setError(error.response?.data)
            setIsLoading(false);
        })
    }
    return { postRequest, isLoading, error, success }
}