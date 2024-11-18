import { useState } from "react";
import apiClient from "../utilities/apiClient";

interface FormData {
    email: string;
    otp: string;
}

interface useVerifyOtpReturn {
    verifyOtp: (data: FormData) => void;
    error: string | null;
    isLoading: boolean;
}

export const useVerifyOtp = (): useVerifyOtpReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const verifyOtp = (formData: FormData) => {
        setIsLoading(true);
        apiClient.post("/verify_otp", formData).then(res => {
            console.log(res.data);
            setIsLoading(false);
        }).catch(error  => {
            console.log(error);
            setError(error.data);
            setIsLoading(false);
        })
    }
    return { verifyOtp, isLoading, error}
}
