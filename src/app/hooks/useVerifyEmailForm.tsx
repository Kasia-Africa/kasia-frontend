import { useRouter } from "next/router";
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import {TVerifyEmail } from '../types';
import { EmailCodeValidationSchema} from '../utils/validations';
import useAuthService from './useAuthService';
import useNotify from './useNotify';

function useVerifyEmailForm (initialEmail: string) {
    const {verifyEmail} = useAuthService()
    const router = useRouter()
    const { error, success} = useNotify()
    const email = initialEmail;

    const {register, handleSubmit, formState, formState: {errors}} = useForm<TVerifyEmail>({
        resolver: yupResolver(EmailCodeValidationSchema),
        mode: 'onChange'
    });

    async function submitForm(data: TVerifyEmail): Promise<void> {
        try {
            data.email = email;
            // @ts-ignore
            data.reset_code = parseInt(data.reset_code.replace(/ /g, ''));
            
            const response = await verifyEmail(data)
            success(response.message, 1000)
            router.push({
                pathname: '/forget-password/update',
                query: {email: email, code : data.reset_code}
            });
        } catch(e : any) {
          error(e.message || "An error occurred!");
        }
    }
    return {
        handleSubmit,
        email,
        submitForm,
        formState,
        errors,
        register,
    }
}
export default useVerifyEmailForm