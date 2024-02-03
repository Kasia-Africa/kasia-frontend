import React from 'react';
import ErrorMessage from '.';

export default {
  component: ErrorMessage,
  title: 'ErrorMessage',
};

export const WithText = (): JSX.Element => (
  <ErrorMessage id="with-text" message="Value is required" />
);