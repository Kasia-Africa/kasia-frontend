import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const StyledButton = styled.button`
  &.custom-button {
    position: relative;
    background: none;
    outline: none;
    border: 1px solid #0AB621;
    color: #0AB621;
    width: 127px;
    height: 30px;
    cursor: pointer;
  }
`;

const AddToCartButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <StyledButton className="custom-button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default AddToCartButton;
