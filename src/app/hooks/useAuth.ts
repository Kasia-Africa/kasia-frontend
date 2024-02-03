import postData from '@helpers/postData';
import { TAuthForm, 
    TAuthData, TRegisterForm,
     TPasswordForm, TVerifyEmail, TResetPasswordForm,TUserData} from '../types/index';

export default function useAuth() {
    
    async function login (data: TAuthForm): Promise<TAuthData> {
        const path = 'login';
        const response = await postData<TAuthForm, TAuthData>(path, data);
        return response;
    }   
    async function signup (data: TRegisterForm): Promise<TAuthData> {
        const path = 'register';
        const response = await postData<TRegisterForm, TAuthData>(path, data)
        return response;
    }
    async function password(data: TPasswordForm): Promise<TUserData> {
        const path = 'password/reset';
        const response = await postData<TPasswordForm, TUserData>(path, data)
        return response;
    }
    async function verifyEmail(data: TVerifyEmail): Promise<TUserData> {
        const path = 'password/verify';
        const response = await postData<TVerifyEmail, TUserData>(path, data)
        return response
    }
    async function updatePassword(data: TResetPasswordForm):Promise<TUserData> {
        const path = 'password/update';
        const response = await postData<TResetPasswordForm, TUserData >(path, data)
        return response
    }
    
    return {
        login,
        signup,
        password,
        verifyEmail,
        updatePassword
    };
}