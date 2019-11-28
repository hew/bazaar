import get from 'safe-await';
import React, { useState } from 'react';
import { Box, Text, Input, Button, Loading } from '../theme';
import { useMachineValue } from '../machines';
import { useExample } from '../hooks';
import { match } from './utils';
import { Auth } from 'aws-amplify';

export default () => {
  const hookResult = useExample();

  console.log(hookResult);

  return match(
    hookResult,
    ({ loading }) => <Text variant="h3">Loading...</Text>,
    ({ data }) => {
      return data ? (
        <>
          <Text variant="h3">id: {data.id}</Text>
          <Text variant="h2">title: {data.title}</Text>
          <Text variant="h4">content: {data.content}</Text>
        </>
      ) : (
        <Text variant="h3">Need to add some data to the DB</Text>
      );
    },
    ({ error }) => (
      <Box variant="frame">
        <Text variant="h5">There has been an error...</Text>
      </Box>
    ),
  );
};
