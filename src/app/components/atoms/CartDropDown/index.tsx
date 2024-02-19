import React from 'react';
import styled from 'styled-components';
import { Separator } from '../Separator';

interface CartProps {
    children: React.ReactNode;
}
const CartDropdownContainer = styled.ul`
  position: absolute;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #D8D8D8;
  border-radius: 4px;
  background-color: white;
  top: 50px;
  left: -9rem;
  z-index: -1;
  transition: all 10s;
  &:hover {
    transform: translateY(-5px); 
  }
`;

const CartDropdown: React.FC<CartProps> = ({ children }) => {
  return <CartDropdownContainer>
    {children}
    <Separator className='mt-2'/>
    </CartDropdownContainer>;
};

export default CartDropdown;
