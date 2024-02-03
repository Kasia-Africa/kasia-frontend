// import {useState} from 'react'
import styled from 'styled-components';
import styledMap from 'styled-map';

interface InputProps {
  placeholder?: string
  type?:string
  required?: boolean;
  className?: string;
  padding?: 'lg' | 'sm' | 'xs' | 'xxs' | 'default';
  radius?: 'footer' |'search'| 'default';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: 'footer'| 'general'| 'search'| 'default';
  ph?: 'footer'| 'default' | 'others';
  autoComplete?: string;
  value?: string;
  height?: string;
}

const placeholderStyle = styledMap('ph', {
  default: {},
  footer: {
    position: 'relative',
    left: '-20px',
    color: '#999',
  },
others: {
  width: '100%',
}
})
const paddingSize = styledMap('padding', {
  xxs: '0.7775rem',
  xs: '0.9375rem 2.1875rem',
  sm: '1.4375rem 1.4375rem',
  lg: '1rem 3rem',
  default: '',
});
const borderRadiusSize = styledMap('radius', {
  footer: '4px',
  search: '500px',
  default: '3px',
});

const width = styledMap('width', {
  general: '100%',
  footer: '80%',
  search: '642px',
  default: '100%',
})
const InputAtom = styled.input.attrs(({className})=> ({
  className: `${className || ''}`,
}))<InputProps>`
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: ${borderRadiusSize};
  font-weight: normal;
  display: block;
  width: ${width};
  padding: ${paddingSize};
  font-size: 0.875rem;
  &::placeholder {
   ${placeholderStyle}
  &.dark {
    border: 1px solid #717171;
    placeholder: color-gray-400;
    color: white;
  }
`;

export default InputAtom;