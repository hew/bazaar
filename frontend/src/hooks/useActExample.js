import React, { useState, useEffect } from 'react';
import { Auth } from '../aws/amplify';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function useActExample() {
  const [acted, setActed] = useState({ loading: true });

  async function operation() {
    await sleep(500);
    setActed({ data: true });
  }

  return { acted, operation };
}
