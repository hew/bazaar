import { useState, useEffect } from 'react';
import get from 'safe-await';
import { queries, API_QUERY } from '../../../utils/amplify';

export default function useExample() {
  const [result, setResult] = useState({ loading: true });

  useEffect(() => {
    async function fetchData() {
      const [error, resp] = await get(
        API_QUERY(queries.getBazaar, {
          id: '99',
        }),
      );

      if (error) {
        setResult({ error });
        return;
      }

      const { data } = resp;

      setResult({ data: data.getBazaar });
    }
    fetchData();
  }, []);

  return result;
}
