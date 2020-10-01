import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(url)
        .then(response => response.json()
        )
        .then(rates => {
          setData(rates.status);
        });
    }
    catch (e) {
      setError(e);
    }
    finally {
      setLoading(false);
    }
  }, []);
  return [{ data, isLoading, hasError }];
}
