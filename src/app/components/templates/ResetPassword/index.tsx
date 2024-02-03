import React ,{useState} from 'react'
import { Button } from "@app/components/atoms/Buttons";
import AuthCard from "@app/components/atoms/Card";
import styled from "styled-components";
import InputWithIcon from "@app/components/molecules/InputWithIcon";
import {PasswordVisible } from '@app/components/atoms/PasswordVisibility';
import Label from '@app/components/atoms/Label';
import useUpdatePasswordForm from '@app/hooks/useUpdatePasswordForm';
import ErrorMessage from '@app/components/atoms/ErrorMessage';
import Loader from '@app/components/atoms/Loader';

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

export default function ResetPassword({ initialEmail, initialResetCode } : {initialEmail: string, initialResetCode : number }) {
  
  const {handleSubmit, submitForm, register, errors, formState} = useUpdatePasswordForm(initialEmail, initialResetCode)
  
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  
  const togglePasswordVisibility = () => {
    setPasswordVisibility( ( prev )=> !prev )
  }

    return (
      <Container>
        <AuthCard>
        <div className='flex justify-center flex-col mb-8'>
              <Title>Reset your Password</Title>
            </div>
          <form className="space-y-6" action="#" onSubmit={handleSubmit(submitForm)}>
            <Label htmlFor="Type_Your_New_Password" className='relative'>
              <ErrorMessage id='Type_Your_New_Password' message={errors?.password?.message}/>
              <InputWithIcon
               type={passwordVisibility ? "text" : "password"}
               {...register('password')}
                placeholder="Type Your New Password"
                iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='21' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-6 3h12V9H2v10Z' clip-rule='evenodd'/%3E%3C/svg%3E"
              />
           <PasswordVisible isPasswordVisible={passwordVisibility} onClick={togglePasswordVisibility} />
            </Label>
            <Label htmlFor="password_confirmation" className='relative'>
            <ErrorMessage id='Type_Your_New_Password' message={errors?.password_confirmation?.message}/>
              <InputWithIcon
                type={passwordVisibility ? "text" : "password"}
               {...register('password_confirmation')}
                placeholder="confirm password"
                iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='21' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-6 3h12V9H2v10Z' clip-rule='evenodd'/%3E%3C/svg%3E"
              />
              <PasswordVisible isPasswordVisible={passwordVisibility} onClick={togglePasswordVisibility} />
            </Label>
            <div>
              <Button padding='xxs' width='wide' className="mt-4" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? <Loader /> : 'CONFIRM'}
              </Button>
         </div>
          </form>
        </AuthCard>
      </Container>
    );
  }
  