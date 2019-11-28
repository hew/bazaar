import get from 'safe-await';
import React, { useState } from 'react';
import { Box, Text, Input, Button, Loading } from '../theme';
import { useMachineValue } from '../machines';
import { useExample } from '../hooks';
import { match } from './utils';
import { Auth } from 'aws-amplify';

export default () => {
  const hookResult = useExample();

  return match(
    hookResult,
    ({ loading }) => <Text variant="h3">Loading...</Text>,
    ({ data }) => {
      return data ? (
        <Box justify="center" px={4}>
          <Text variant="h2">id: <Text color="text">{data.id}</Text></Text>
          <Text variant="h2">title: <Text color="text">{data.title}</Text></Text>
          <Text variant="h2">content: <Text color="text">{data.content}</Text></Text>
        </Box>
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
