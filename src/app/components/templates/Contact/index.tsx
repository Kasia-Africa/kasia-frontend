"use client"
import { Controller } from "react-hook-form";
import { Button } from '@app/components/atoms/Buttons'
import InputAtom from '@app/components/atoms/Inputs'
import Label from '@app/components/atoms/Label';
import React from 'react'
import styled from 'styled-components'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import useContactForm from "@app/hooks/useContactForm";
import ErrorMessage from '@app/components/atoms/ErrorMessage';
import TextArea from "@app/components/atoms/TextArea";
import Loader from '@app/components/atoms/Loader';

const Title =  styled.h1`
    color: white;
    font-weight: 500;
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
    position: relative;
    bottom: 70px;
    letter-spacing: 0.25px;
`
const Container = styled.div`
margin: auto auto;
max-width: 1008px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 1008px;

`
const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  & label {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
const InputPhoneForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  & label {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
const ContactUs:React.FC =()=> {

      const { control, register, handleSubmit, submitForm, formState: { errors }, formState } = useContactForm();

                return (
                    <>
                        <Title>Contact Us</Title>
                        <Container>
                        <Form onSubmit={handleSubmit(submitForm)}>
                  <div style={{display: 'flex', justifyContent: 'space-between', width:'1008px'}}>
                  
                      <InputForm>
                        <Label htmlFor="name"> 
                          Name
                          <InputAtom
                          padding="xxs"
                          type='text'
                          width='general'
                          {...register("name")}
                          className='rounded-md h-[35px] w-[300px]' 
                          />
                            <ErrorMessage id="name" message={errors?.name?.message} />
                          </Label>
                      </InputForm>
                        <InputForm>
                          <Label htmlFor="email"> 
                          Email
                          <InputAtom
                            padding="xxs"
                            type='email'
                            width='general'
                            {...register("email")}
                            className='rounded-md h-[35px] w-[300px]' 
                          />
                          <ErrorMessage id="email" message={errors?.email?.message} />
                          </Label>
                       </InputForm>
                        <InputPhoneForm>
                          <Label htmlFor="phonenumber"> 
                            Phone
                            <Controller
                                render={(props) => (
                                  <PhoneInput
                                    country={'ng'}
                                    inputProps={{
                                      name: "phonenumber",
                                      required: true,
                                    }}
                                    onChange={( value ) => props.field.onChange(value)}
                                    value={props.field.value}
                                  />
                                )}
                                name="phonenumber"
                                control={control}
                              />
                            <br />
                            <ErrorMessage id="phonenumber" message={errors?.phonenumber?.message} />
                            </Label>
                        </InputPhoneForm>
                    </div>
                            <InputForm>
                            <Label htmlFor="message">
                            <label>Message</label>
                            <TextArea rows={5} className="border border-s-gray-200 rounded-md p-2 h-[171px]" {...register("message")} />
                            <ErrorMessage id="message" message={errors?.message?.message} />
                            </Label> 
                          
                            </InputForm>
                            <div className='flex justify-center w-[1008px] mt-10'>
                              <Button kind='secondary' type="submit" padding="xxs" className="text-[10px] text-white" disabled={formState.isSubmitting}>
                                  {formState.isSubmitting ? <Loader /> : 'Contact Us'}
                                </Button>
                            </div>
                    </Form>
                        </Container>
                        </>
                )
}
export default ContactUs