import styled from 'styled-components';

interface SeparatorProps {
  hidden?: boolean;
}

export const Separator = styled.hr.attrs(({ className }) => ({
  className: `border-t w-full left-0 ${className || ''}`,
}))<SeparatorProps>`
  border-color: #979797; 
`;
