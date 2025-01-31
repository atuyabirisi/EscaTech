import {useEffect, useState} from 'react';
import apiClient from '../utilities/apiClient';
import { CanceledError } from 'axios';

export const useData = <Type>(endpoint: string, queryString?: any ) => {
    const [data, setData] = useState<Type[]>([]);
    const [dataCount, setDataCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
            .get<Type[]>(endpoint, { signal: controller.signal, params: queryString })
            .then(res => {
                setData(res.data);
                setDataCount(res.data.length);
                setIsLoading(false);
            })
            .catch(error => {
                if(error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    },[]);

  return { data, isLoading, dataCount, error }
}


