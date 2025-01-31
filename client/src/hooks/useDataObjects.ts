import {useEffect, useState} from 'react';
import apiClient from '../utilities/apiClient';
import { CanceledError } from 'axios';

export const useDataObject = <Type>(endpoint: string, queryString?: any ) => {
    const [singleRecord, setData] = useState<Type>({} as Type);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
            .get<Type>(endpoint, { signal: controller.signal, params: queryString })
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                if(error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    },[]);

  return { singleRecord, isLoading, error }
}


