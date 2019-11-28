import get from 'safe-await';
import Stagger from './Stagger.js';
import React, { useState } from 'react';
import { Box, Text, Input, Button, Loading } from '../theme';
import { useMachineValue } from '../machines';
import { useExample } from '../hooks';
import { renderMatch } from './utils';
import { Auth } from 'aws-amplify';

export default () => {
  const hookResult = useExample();

  return renderMatch(
    hookResult,
    ({ loading }) => <Loading />,
    ({ error }) => <Text variant="h5">There has been an error...</Text>,
    ({ data }) => {
      const id = (
        <Text variant="h2">
          id: <Text color="text">{data.id}</Text>
        </Text>
      );

      const title = (
        <Text variant="h2">
          title: <Text color="text">{data.title}</Text>
        </Text>
      );

      const content = (
        <Text variant="h2">
          content: <Text color="text">{data.content}</Text>
        </Text>
      );

      return data ? (
        <Stagger items={[id, title, content]} />
      ) : (
        <Text variant="h3">Need to add some data to the DB</Text>
      );
    },
  );
};
