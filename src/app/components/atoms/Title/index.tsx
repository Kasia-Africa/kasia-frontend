import styled from 'styled-components';
 


export const Title = styled.h1.attrs(({ className }) => ({
    className: `${className || ''}`,
    }))`
    color:  ${({ theme }) => theme.color?.black};
    text-align: center;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    display: flex;
    margin: 0 auto;
    font-size: 22px;
`;
