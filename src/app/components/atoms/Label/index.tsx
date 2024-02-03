import styled from 'styled-components';

const Label = styled.label.attrs(({ className }) => ({ className: `font-medium ${className}` }))`
  & > input {
    margin-top: 0.2rem !important;
    margin-bottom: 0.7rem;
  }

  & > span {
    font-size: 0.875rem;
  }
`;

export default Label;