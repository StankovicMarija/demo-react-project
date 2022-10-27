import { useState, useEffect } from 'react';

const useFetch = dataJson => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(dataJson)
        .then(res => res.json())
        .then(result => setData(result));
    } catch (err) {
      setError(err);
      if (err) {
        setLoading(false);
      }
    }
  }, [dataJson]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
