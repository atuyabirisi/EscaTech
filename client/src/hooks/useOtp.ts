import { useState } from "react";
import apiClient from "../utilities/apiClient";

export interface RequestBody {
    email: string;
}

interface RequestOtpReturn {
    getOtp: (email: RequestBody) => void;
    error: string | null;
    loading: boolean;
}

export const requestOtp = ():RequestOtpReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getOtp = (arg: RequestBody) => {
        setLoading(true);
        apiClient   
            .post("/request_otp", arg)
            .then(_res => {
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError(error.data);
                setLoading(false);
            })
    }
    return { getOtp, error, loading}
};
