"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import AuthCard  from '@app/components/atoms/Card';
import styled from 'styled-components';
import { Button } from '@app/components/atoms/Buttons';
import DividerAtom from '@app/components/atoms/divider';
import InputWithIcon from '@app/components/molecules/InputWithIcon';
import Label from '@app/components/atoms/Label';
import useRegisterForm from '@app/hooks/useRegisterForm';
import ErrorMessage from '@app/components/atoms/ErrorMessage';
import Loader from '@app/components/atoms/Loader';
import FacebookButton from '@app/components/molecules/FacebookButton';
import GoogleMapField from '@app/components/organisms/GoogleMapField';
import { PasswordVisible } from '@app/components/atoms/PasswordVisibility';

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

export default function SignUpPage() {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prev)=> !prev)
  }
  const { submitForm, register, formState, errors, handleSubmit, control, Controller } = useRegisterForm();

  const [step, setStep] = useState(1);
  const handleNext =  () => {
    let isValid = true;
    if (step === 1) {
      isValid = isValid &&
       !formState.errors.username && 
       !formState.errors.email;
    } else if (step === 2) {
      isValid = isValid && 
      !formState.errors.main_delivery_address;
    } else if (step === 3) {
      isValid =
        isValid &&
        !formState.errors.password &&
        !formState.errors.password_confirmation;
    }

  if (isValid && step < 3) {
    setStep((prevStep) => prevStep + 1);
  }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <Container>
      <AuthCard>
      <div className='flex justify-center flex-col mb-8'>
            <Title>Groceries Delivered To Your Doorstep ASAP</Title>
          </div>
        <form className="space-y-2" onSubmit={handleSubmit(submitForm)}>
      { step === 1 &&  
        <>
         <Label htmlFor="username">
         <ErrorMessage id="username" message={errors?.username?.message} />
          <InputWithIcon
          type='text'
          placeholder='Username'
          {...register("username")}
          iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M8 0C5.79 0 4 1.79 4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm2.1 4a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0Zm4 9c0-.64-3.13-2.1-6.1-2.1-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V13ZM0 13c0-2.66 5.33-4 8-4s8 1.34 8 4v3H0v-3Z' clip-rule='evenodd'/%3E%3C/svg%3E"
          />
         </Label>
         <Label htmlFor="email">
         <ErrorMessage id="email" message={errors?.email?.message} />
          <InputWithIcon
          type='email'
          {...register("email")}
          placeholder='Email'
          iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='14' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M15.666.334H2.333c-.917 0-1.659.75-1.659 1.667L.666 12c0 .916.75 1.666 1.667 1.666h13.333c.917 0 1.667-.75 1.667-1.666V2c0-.917-.75-1.667-1.667-1.667Zm0 11.667H2.333V3.667l6.666 4.167 6.667-4.167v8.334ZM2.333 2l6.666 4.166 6.667-4.166H2.333Z' clip-rule='evenodd'/%3E%3C/svg%3E"
          />
         </Label>
         </>
         }
        {
          step === 3 && <>
         <Label htmlFor="password" className='relative'>
         <ErrorMessage id="password" message={errors?.password?.message} />
          <InputWithIcon
          type={passwordVisibility ? "text" : "password"}
          {...register("password")}
          placeholder='Password'
          iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='21' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-6 3h12V9H2v10Z' clip-rule='evenodd'/%3E%3C/svg%3E"
          />
         <PasswordVisible isPasswordVisible={passwordVisibility} onClick={togglePasswordVisibility} />
         </Label>
        <Label htmlFor="password_confirmation" className='relative'>
         <ErrorMessage id="password_confirmation" message={errors?.password_confirmation?.message} />
          <InputWithIcon
         type={passwordVisibility ? "text" : "password"}
          {...register("password_confirmation")}
          placeholder='Confirm Password'
          iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='21' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-6 3h12V9H2v10Z' clip-rule='evenodd'/%3E%3C/svg%3E"
          />
          <PasswordVisible isPasswordVisible={passwordVisibility} onClick={togglePasswordVisibility} />
         </Label>
         </>
         }
       {step === 2 && <Label htmlFor="main_delivery_address">
         <ErrorMessage id="main_delivery_address" message={errors?.main_delivery_address?.message} />
         <Controller
            render={({ field: { onChange, onBlur, value } }) => (
              <GoogleMapField 
              onChange={onChange}
              onBlur={onBlur} 
              propValue={value}
             />
            )}
            name="main_delivery_address"
            control={control}
            defaultValue=""
          />
         </Label>}
          <div>
           { step < 3  && <Button type="button" padding='xxs' width='wide' className='mt-2' onClick={handleNext}>
              NEXT
            </Button>}
            { step > 1 && <Button type="button" kind='secondary' padding='xxs' width='wide' className='mt-2' onClick={handlePrev}>
              PREVIOUS
            </Button>}
           { step === 3 && <Button type="submit" padding='xxs' width='wide' className='mt-2' disabled={formState.isSubmitting}>
            {formState.isSubmitting ? <Loader /> : 'COMPLETE SIGNUP'}
            </Button>}
            <DividerAtom/>
            <FacebookButton />
          </div>
        </form>
      </AuthCard>
      <StyledFooter>
        <h3>Already have An Account? 
          <StyledLink>
            <Link href={'/login'}>  Login</Link>
            </StyledLink>
          </h3>
      </StyledFooter>
    </Container>
  );
}
