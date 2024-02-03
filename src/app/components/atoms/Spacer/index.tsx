import styled from 'styled-components';
 
interface SpacerProps {
    height?: number;
}

export const Spacer = styled.div.attrs(({ className }) => ({
    className: `${className || ''}`,
    }))<SpacerProps>`
    height: ${({ height }) => `${height || 10 }px` };
`;


 