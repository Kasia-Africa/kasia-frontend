"use client"

import styled from 'styled-components';
export const Container = styled.div`
  max-width: 26rem;
  margin: 0 auto;
  position: relative;
  left: 10px;
`;

export const StyledCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  border-radius: 0.115rem;
  max-width: 26rem;
  height: 360px;
  padding: 2rem;
  @media (min-width: 640px) {
    padding: 2.5rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const StyledLink = styled.span`
  cursor: pointer;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  margin-top: 1.25rem;
  text-align: center;
  justify-content: center;
`;

export const StyledFacebookButton = styled.button`
  background-color: #1877f2;
  color: white;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  display: flex;
  padding: 5px;
`;


