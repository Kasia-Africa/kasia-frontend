import { useRouter } from "next/router";
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import  {TResetPasswordForm } from '../types';
import {ResetPasswordValidationSchema} from '../utils/validations';
import useAuthService from './useAuthService';
import useNotify from './useNotify';

function useUpdatePasswordForm (initialEmail : string, initialResetCode: number) {
    const {updatePassword} = useAuthService()
    const router = useRouter()
    const {error, success} = useNotify();
    const email = initialEmail;
    const reset_code = initialResetCode;

    const {register, handleSubmit, formState, formState: {errors}} = useForm<TResetPasswordForm>({
        resolver: yupResolver(ResetPasswordValidationSchema),
        mode: 'onChange'
    });

    async function submitForm(data: TResetPasswordForm): Promise<void> {
        try {
            data.email = email;
            data.reset_code = reset_code;
            const response = await updatePassword(data);

            success(response.message, 1000)
            router.push('/login')
        } catch(e:any) {
          error(e.message || "Incorrect Password");
        }
    }
    return {
        email,
        reset_code,
        handleSubmit,
        submitForm,
        formState,
        errors,
        register,
    }
}
export default useUpdatePasswordForm