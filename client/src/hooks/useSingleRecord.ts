import { useEffect, useState } from "react"
import apiClient from "../utilities/apiClient";

export const useSingleRecord = <Type>(endpoint: string) => {
    const [data, setData] = useState<Type>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true);
        apiClient
            .get<Type>(endpoint)
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
            });
    },[]);

    return { data, isLoading, error}
}