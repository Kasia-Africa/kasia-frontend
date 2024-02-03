// import {useState} from 'react'
import styled from 'styled-components';
import styledMap from 'styled-map';

interface TextArea {
  placeholder?: string
  required?: boolean;
  className?: string;
  padding?: 'lg' | 'sm' | 'xs' | 'xxs' | 'default';
  radius?: 'footer' |'search'| 'default';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: 'footer'| 'general'| 'search'| 'default';
  autoComplete?: string;
  value?: string;
  color?: string;
  border?: string;
}


const paddingSize = styledMap('padding', {
  default: '0.75rem',
});
const borderRadiusSize = styledMap('radius', {
  default: '10px',
});

const width = styledMap('width', {
  default: '100%',
})

const TextArea = styled.textarea.attrs(({className})=> ({
  className: `${className || ''}`,
}))<TextArea>`
background-color: ${({ color }) => color || 'white'};
  border: ${({border})=> border || '1px solid #e5e5e5'};
  border-radius: ${borderRadiusSize};
  font-weight: normal;
  display: block;
  width: ${width};
  padding: ${paddingSize};
  font-size: 0.875rem;
`;

export default TextArea;