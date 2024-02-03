"use client"
import styled from 'styled-components';
import styledMap from 'styled-map';

const borderRadiusSize = styledMap('radius', {
    none: '0',
    default: '3px',
  });
  
  const buttonColor = styledMap('kind', {
    facebook: '#3a5998',
    secondary: '#fe9f08',
    default: '#1fa548',
    tertiary: '#009915'
  });
 
  const minWidth = styledMap('width', {
    wide: '100%',
    book: '20%',
    mini: '10%',
    default: ''
  })

  const paddingSize = styledMap('padding', {
    xxxs: '0.3345rem',
    xxs: '0.5375rem',
    xs: '0.9375rem 2.1875rem',
    sm: '1.4375rem 1.4375rem',
    lg: '1rem 3rem',
    default: '1.25rem 3.125rem',
  });

  const fontSize = styledMap('fz', {
    xs: '14px',
    default: '1.125rem',
  });
  
 
  export interface ButtonProps {
    radius?: 'none' | 'xs' | 'default';
    padding?: 'lg' | 'sm' | 'xs' | 'xxs' | 'xxxs'|'default';
    width?: 'wide' | 'book'| 'mini';
    kind?: 'facebook' | 'secondary' | 'tertiary' | 'default';
    secondary?: boolean;
    children?: React.ReactNode;
    onClick?: ()=> void;
  }
  
  export const Button = styled.button.attrs(({ className}) => ({
    className: `text-lg focus:outline-none  inline-flex items-center justify-center ${className || ''}`,
  }))<ButtonProps>`
    background-color: ${buttonColor};
    color: ${({ theme }) => theme.color?.white};
   box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    font-size: ${fontSize};
    border-radius: ${borderRadiusSize};
    padding: ${paddingSize};
    width: ${minWidth};
`;


 