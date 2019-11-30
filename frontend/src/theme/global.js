import React from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet-async';
import Constants from 'expo-constants';
import normalize from './normalize.css';

const {meta} = Constants.manifest.extra;

export default () => (
  <>
    <Helmet title={meta.title} meta={[...meta.general, ...meta.social]} link={[...meta.link]} />
    <Global
      styles={css`
        ${normalize}
        * { box-sizing: border-box; }
      `}
    />
  </>
);
