import Cookies from 'js-cookie';
import {
    AuthServiceType,
    TAuthForm,
    TPasswordForm,
    TRegisterForm,
    TResetPasswordForm,
    TUserData,
    TVerifyEmail,
  } from '../types';
import useAuth from './useAuth';


export default function useAuthService(): AuthServiceType {
    const auth = useAuth();

    async function login(value: TAuthForm): Promise<void> {
        const response = await auth.login(value);
        Cookies.set('access_token', response.access_token);
    }
    async function signup(value: TRegisterForm): Promise<void> {
      const response = await auth.signup(value)
      Cookies.set('access_token', response.access_token )
    }
    async function password(value: TPasswordForm): Promise<TUserData> {
       const response = await auth.password(value)
       return response;
    }
    async function verifyEmail(value: TVerifyEmail): Promise<TUserData> {
      const response = await auth.verifyEmail(value)
      return response;
    }
    async function updatePassword(value: TResetPasswordForm): Promise<TUserData> {
      const response = await auth.updatePassword(value)
      return response;
    }

    return {
        login,
        signup,
        password,
        verifyEmail,
        updatePassword,
      };
}