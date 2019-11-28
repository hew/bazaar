import React, { useState, useEffect } from 'react';
import { queries, API_QUERY, Auth } from '../../../utils/amplify';
import get from 'safe-await';

export default function useExample() {
  const [result, setResult] = useState({ loading: true });

  useEffect(() => {
    async function fetchData() {
       const [error, resp] = await get(API_QUERY(queries.getBazaar, {
         id: '99',
       }));

       if (error) {
         setResult({ error: error })
       }

       const {data} = resp;

       setResult({ data: data.getBazaar });
      
    }
    fetchData();
  }, []);

  return result;
}
