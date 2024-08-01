import {useEffect, useState} from 'react';
import apiClient from '../utilities/apiClient';

const useData = <Type>(endpoint: string) => {
    const [data, setData] = useState<Type[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<String>();

    useEffect(() => {
        setIsLoading(true);
        apiClient
            .get<Type[]>(endpoint)
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            })
    },[]);
  return { data, isLoading, error }
}

export default useData;

