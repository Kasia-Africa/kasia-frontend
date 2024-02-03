"use client"
import React, {useState,  ChangeEvent} from 'react'
import { toast } from 'react-toastify';
import AuthCard  from '@app/components/atoms/Card';
import styled from 'styled-components';
import { Button } from '@app/components/atoms/Buttons';
import InputWithIcon from '@app/components/molecules/InputWithIcon';
import useVerifyEmailForm from '@app/hooks/useVerifyEmailForm';
import Label from '@app/components/atoms/Label';
import ErrorMessage from '@app/components/atoms/ErrorMessage';
import Loader from '@app/components/atoms/Loader';
import postData from '@app/helpers/postData';
import { TPasswordForm, TUserData } from '@app/types';

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
 const RetryButton = styled.button`
    font-weight: 700;
    cursor: pointer;

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
export default function VerifyEmail({ initialEmail } : { initialEmail : string }) {
  const {register, email, errors, handleSubmit, submitForm, formState} = useVerifyEmailForm(initialEmail)
  
  const [value, setValue] = useState('');
  
  const formatInputValue = (inputValue: string) => {
    const digitsOnly = inputValue.replace(/\D/g, '');
    const formattedValue = digitsOnly.replace(/(.{4})(.{4})/, '$1 $2');
    return formattedValue;
  };
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatInputValue(inputValue);
    setValue(formattedValue);
  };

  const resendResetCode = async (): Promise<void> => {
    try {
        const data = {
          email: email || initialEmail
        }

        const response = await postData<TPasswordForm, TUserData>('password/reset', data);
        toast.success( response.message, { autoClose: 1000 } );
    } catch(e : any) {
      toast.error(e.message || 'An error occurred');
    }
  }

  return (
    <Container>
      <AuthCard>
      <div className='flex justify-center flex-col mb-8'>
            <Title>Check Your Mail</Title>
            <Description className='text-sm'>We sent a code to <strong>{email}</strong>, once you 
               receive the code enter it below to reset your password</Description>
          </div>
        <form className="space-y-2" action="#" onSubmit={handleSubmit(submitForm)}>
          <Label htmlFor='verify_code'>
            <ErrorMessage id='verify_code' message={errors?.reset_code?.message}/>
          <InputWithIcon
              type="text"
              placeholder='———— ———— '
              {...register('reset_code')}
              maxLength={8}
              value={value}
              className='text-center'
              onChange={handleChange}
            />
          </Label>
          <div>
            <Button width='wide' padding='xxs'  className='mt-6' disabled={formState.isSubmitting}>
              {formState.isSubmitting ? <Loader/> : 'SUBMIT'}
            </Button>
          </div>
        </form>
      </AuthCard>
      <StyledFooter>
        <p>{`Didn't get any message, `}<RetryButton type='button'  onClick={resendResetCode}>Retry</RetryButton></p>
      </StyledFooter>
    </Container>
  );
}