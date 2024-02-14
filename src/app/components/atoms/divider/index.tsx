import React from 'react';
import styled from 'styled-components';


const StyledDivider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem;
  margin-top: 0.945rem;

  .divider-text {
    margin: 0 0.5rem;
    font-size: 14px;
    color: #ccc;
  }

  .border-line {
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }
`;

const DividerAtom: React.FC = () => {
  return (
    <StyledDivider>
      <div className='border-line'></div>
      <div className="divider-text">or</div>
      <div className='border-line'></div>
    </StyledDivider>
  );
};

export default DividerAtom;
