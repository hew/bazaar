import React, { useState, useEffect } from 'react';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function useDelay(d) {
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    async function delay() {
      await sleep(d);
      setDelayed(true);
    }
    delay();
  }, []);
  return delayed;
}
