import {useEffect, useState} from 'react';
import {getLoginToken} from './LoginLocalStorage';

export const useFetch = ({url, methodType, isAuthenticated}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: methodType,

        ...(isAuthenticated
          ? {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: getLoginToken(),
              },
            }
          : {}),
      });
      const fetchedData = await response.json();
      if ((data.errors && data.errors.length > 0) || data.error) {
        setIsError(true);
      } else {
        setData(fetchedData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
