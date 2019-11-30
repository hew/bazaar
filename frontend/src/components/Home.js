import React from 'react';
import Stagger from './Stagger';
import { Text, Loading } from '../theme';
import { useExample } from '../hooks';
import { renderMatch } from './components.utils';

export default () => {
  const hookResult = useExample();

  return renderMatch(
    hookResult,
    ({ loading }) => <Loading />, // eslint-disable-line no-unused-vars
    ({ error }) => <Text variant="h5">There has been an error...</Text>, // eslint-disable-line no-unused-vars
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
