import { useEffect, useState } from "react";

const useData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (url) {
      let ignore = false;

      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (!ignore) {
            setData(data);
            setLoading(false);
          }
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };

      fetchData();

      return () => {
        ignore = true;
      };
    }
  }, [url]);

  return { data, loading, error };
}

export { useData }