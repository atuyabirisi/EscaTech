import {useEffect, useState} from 'react';
import apiClient from '../utilities/apiClient';

export const useData = <Type>(endpoint: string) => {
    const [data, setData] = useState<Type[]>([]);
    const [dataCount, setDataCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        apiClient
            .get<Type[]>(endpoint)
            .then(res => {
                setData(res.data);
                setDataCount(res.data.length);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            })
    },[]);

  return { data, isLoading, dataCount, error }
}


