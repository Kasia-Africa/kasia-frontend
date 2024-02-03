import React from 'react';
import styled from 'styled-components';

const Label = styled.div.attrs(() => ({
  className: 'text-red-600 mx-2 py-1',
}))`
  font-size: 0.8rem;
`;

interface Props {
  id: string;
  message?: string;
}

function ErrorMessage({ id, message }: Props): JSX.Element {
  return <Label id={id}>{message}</Label>;
}

export { ErrorMessage as default };