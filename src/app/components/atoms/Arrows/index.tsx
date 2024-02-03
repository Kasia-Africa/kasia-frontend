import React from 'react';
import styled from 'styled-components';

const ArrowBackground = styled.button.attrs(({ className }) => ({
    className: `${className || ''}`,
    type: 'button',
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #646464;
    z-index: 1;
    background-color: ${({ theme }) => theme.color?.white};;

    &:hover,
    &:active,
    &:focus {
        background-color: ${({ theme }) => theme.color?.orange};
        border-color: ${({ theme }) => theme.color?.orange};
    }
`;


export default function Arrows(props : { className?: string, onClick?: any, isNext?: boolean }) {  
    const { className, onClick, isNext } = props;
    return (
        <ArrowBackground className={className} onClick={onClick}>
            { isNext ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="none"><path fill="#000" fill-rule="evenodd" d="m2.432 0 8.634 8-8.634 8-1.766-1.636L7.534 8 .666 1.636 2.432 0Z" clip-rule="evenodd"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="none"><path fill="#000" fill-rule="evenodd" d="M9.568 0 .934 8l8.634 8 1.766-1.636L4.466 8l6.868-6.364L9.568 0Z" clip-rule="evenodd"/></svg> }
        </ArrowBackground>
    );
}
