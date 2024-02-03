import React, {useState} from 'react';
import Link from 'next/link';
import AuthCard from '@app/components/atoms/Card';
import Label from '@app/components/atoms/Label';
import ErrorMessage from '@app/components/atoms/ErrorMessage';
import styled from 'styled-components';
import { Button } from '@app/components/atoms/Buttons';
import DividerAtom from '@app/components/atoms/divider';
import useAuthForm from '@hooks/useAuthForm';
import InputWithIcon from '@app/components/molecules/InputWithIcon';
import Loader from '@app/components/atoms/Loader';
import FacebookButton from '@app/components/molecules/FacebookButton';
import {  PasswordVisible } from '@app/components/atoms/PasswordVisibility';

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
  color: #6b6b6b;
  font-weight: 400;
  color: #6B6B6B;
`;

const StyledLink = styled.span`
  cursor: pointer;
  font-weight: 700;
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
 const LoginPage= ()=> {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const { register, errors, handleSubmit, submitForm, formState } = useAuthForm()
const togglePasswordVisibility = () => {
  setPasswordVisibility((prev)=> !prev)
}
  return (
    <Container>
      <AuthCard>
        <div className="flex justify-center flex-col mb-8">
          <Title>Welcome back</Title>
          <Description className="text-sm">Login with your email and password</Description>
        </div>
        <form className="space-y-2" onSubmit={handleSubmit(submitForm)}>
            <Label htmlFor="login">
              <ErrorMessage id="login" message={errors?.login?.message} />
              <InputWithIcon
                type="text"
                iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='14' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M15.666.334H2.333c-.917 0-1.659.75-1.659 1.667L.666 12c0 .916.75 1.666 1.667 1.666h13.333c.917 0 1.667-.75 1.667-1.666V2c0-.917-.75-1.667-1.667-1.667Zm0 11.667H2.333V3.667l6.666 4.167 6.667-4.167v8.334ZM2.333 2l6.666 4.166 6.667-4.166H2.333Z' clip-rule='evenodd'/%3E%3C/svg%3E"
                {...register("login")}
                placeholder="Email or Username"
                required
              />
            </Label>
          <Label htmlFor="password" className='relative'>
          <ErrorMessage id="password" message={errors?.password?.message} />
            <InputWithIcon
                type={passwordVisibility ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='21' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-6 3h12V9H2v10Z' clip-rule='evenodd'/%3E%3C/svg%3E"
                required
              />
            <PasswordVisible isPasswordVisible={passwordVisibility} onClick={togglePasswordVisibility} />
            </Label>
          <div>
              <Button type="submit" padding="xxs" width="wide" className="mt-2 text-[17px] text-white" disabled={formState.isSubmitting}>
                {formState.isSubmitting ? <Loader /> : 'LOGIN'}
              </Button>
            <DividerAtom />
            <FacebookButton />
          </div>
        </form>
      </AuthCard>
      <StyledFooter>
        <h3>
          {'Don\'t have An Account?'}
          <StyledLink>
            <Link href={'/register'}> Sign Up</Link>
          </StyledLink>
        </h3>
        <Link href={'/forget-password'}>
          <p className="mt-4">Forgot Password?</p>
        </Link>
      </StyledFooter>
    </Container>
  );
}
export default LoginPage