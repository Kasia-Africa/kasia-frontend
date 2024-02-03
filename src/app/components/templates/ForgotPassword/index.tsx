"use client"
import React from 'react';
import Link from 'next/link';
import AuthCard  from '@app/components/atoms/Card';
import styled from 'styled-components';
import { Button } from '@app/components/atoms/Buttons';
import InputWithIcon from '@app/components/molecules/InputWithIcon';
import Label from '@app/components/atoms/Label';
import usePasswordForm from '@app/hooks/usePasswordForm';
import ErrorMessage from '@app/components/atoms/ErrorMessage';
import Loader from '@app/components/atoms/Loader';

// interface IconProps {
//     showIcon?: boolean;
//   }
  const Container = styled.div`
  max-width: 26rem;
  margin: 0 auto;
  position: relative;
  left: 10px;
`;
const Title = styled.h3`
font-size: 1.2rem;
font-weight: 800;
text-align: center;
margin-bottom: 5px;
color: #393939;
`;

const Description = styled.p`
text-align: center;
color: #6B6B6B;
font-weight: 400;
color: #6B6B6B;
`;
const StyledLink = styled.span`
cursor: pointer;
font-weight: 400;
margin-top: 10px;
&:hover {
  text-decoration: underline;
}
`;
const StyledFooter = styled.div`
display: flex;
flex-direction: column;
color: white;
width: 100%;
margin-top: 1.25rem;
text-align: center;
justify-content: center;
`;

export default function ForgotPassword() {
  const {handleSubmit, submitForm, register, formState, errors} = usePasswordForm()
  return (
    <Container>
      <AuthCard>
      <div className='flex justify-center flex-col mb-8'>
            <Title>Forgot Password</Title>
            <Description  className='text-sm'>Enter the email account associated with your password</Description>
          </div>
        <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
        <Label htmlFor="email">
          <ErrorMessage id='email' message={errors?.email?.message}/>
          <InputWithIcon
          type='email'
          placeholder='Enter Email'
          {...register("email")}
          iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='14' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M15.666.334H2.333c-.917 0-1.659.75-1.659 1.667L.666 12c0 .916.75 1.666 1.667 1.666h13.333c.917 0 1.667-.75 1.667-1.666V2c0-.917-.75-1.667-1.667-1.667Zm0 11.667H2.333V3.667l6.666 4.167 6.667-4.167v8.334ZM2.333 2l6.666 4.166 6.667-4.166H2.333Z' clip-rule='evenodd'/%3E%3C/svg%3E"
          />
         </Label>
          <div>
            <Button padding='xxs' width='wide' className='mt-7' disabled={formState.isSubmitting}>
              {formState.isSubmitting  ? <Loader/> : 'RESET PASSWORD'}
            </Button>
          </div>
        </form>
      </AuthCard>
      <StyledFooter>
          <StyledLink>
            <Link href={'/login'}> Back To Login</Link>
            </StyledLink>
      </StyledFooter>
    </Container>
  );
}
