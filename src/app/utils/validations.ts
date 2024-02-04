import { object, string } from 'yup';
import * as Yup from 'yup';


export const authValidationSchema = object().shape({
  login: string()
    .min(3, 'Email or Username cannot be less than three characters')
    .required('Email or Username is required'),
  password: string()
    .min(6, 'Password cannot be less than 6 characters')
    .max(30, 'Password cannot be more than 30 characters')
    .required('Password is required'),
});


export const signupValidationSchema = object().shape({
  username: string()
  .matches(/\S+/, 'username cannot be empty')
    .min(3, 'Username cannot be less than three characters')
    .matches(/^\S*$/, 'No spaces are allowed')
    .required('Username is required'),
  email: string()
  .matches(/\S+/, 'Email cannot be empty')
    .email('Invalid email address')
    .required('Email is required'),
   main_delivery_address: string()
    .required('Delivery address is required'),
  password: string()
  .min(6, 'Password cannot be less than 6 characters')
  .max(30, 'password cannot be more than 30 characters')
  .matches(/^.*(?=.{3,})/, 'must contain both numbers and alphabets')
  .matches(/^(?=.*[a-zA-Z])/, 'must contain upper case and lower case')
  .matches(/^(?=.*[0-9])/, 'must contain number between 0 and 9')
  .matches(/^(?=.*[\d\x])/, ' must have a digit and contain any special character')
  .matches(/^(?=.*[!$#%])/, 'must have at least a character in !$#%')
  .required('Password is required'),
  password_confirmation: string()
  .oneOf([Yup.ref('password')], "password must match")
  .required('Password confirmation  is required'),
});


export const contactUsValidationSchema = object().shape({
  name: string()
    .min(3, 'Your Name cannot be less than three characters')
    .required('Your Name is required'),
  email: string()
    .matches(/\S+/, 'Email cannot be empty')
    .email('Invalid email address')
    .required('Your Email is required'),
  phonenumber: string()
    .min(11, 'Invalid Phone Number')
    .max(13, 'Invalid Phoe Number'),
  message: string()
    .required('Your Message cannot be empty')
    .min(3, 'Please type in a valid message ')
});


export const PasswordResetValidationSchema = object().shape({
  email: string()
  .matches(/\S+/, 'Enter a valid email')
    .email('Invalid email address')
    .required('Email is required'),
})


export const EmailCodeValidationSchema = object().shape({
reset_code: string()
  .matches(/^\d{4}\s?\d{4}$/, 'Invalid verification code.')
  .required('Enter the reset code')
});


export const ResetPasswordValidationSchema = object().shape({
  password: string()
  .min(6, 'Password cannot be less than 6 characters')
  .max(30, 'password cannot be more than 30 characters')
  .matches(/^.*(?=.{3,})/, 'must contain both numbers and alphabets')
  .matches(/^(?=.*[a-zA-Z])/, 'must contain upper case and lower case')
  .matches(/^(?=.*[0-9])/, 'must contain number between 0 and 9')
  .matches(/^(?=.*[\d\x])/, ' must have a digit and contain any special character')
  .matches(/^(?=.*[!$#%])/, 'must have at least a character in !$#%')
  .required('Password is required'),
  password_confirmation: string()
  .oneOf([Yup.ref('password')], "password must match")
  .required('Password confirmation  is required'),
})