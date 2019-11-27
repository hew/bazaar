import React from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet-async'
import { meta } from '../data/config';
import normalize from './normalize.css';

export default () => (
  <>
    <Helmet title={meta.title} meta={[...meta.general, ...meta.social]} link={[...meta.link]} />
    <Global
      styles={css`
        ${normalize}
        * {
          box-sizing: border-box;
        }
      `}
    />
  </>
);

// Declare custom fonts in global (above)
