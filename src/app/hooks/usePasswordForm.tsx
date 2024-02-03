import { useRouter } from "next/router";
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import {TPasswordForm, TUserData } from '../types';
import { PasswordResetValidationSchema} from '../utils/validations';
import useAuthService from './useAuthService';
import useNotify from './useNotify';

function usePasswordForm () {
    const {password} = useAuthService()
    const router = useRouter()
    const {error, success} = useNotify()

    const {register, handleSubmit, formState, formState: { errors } } = useForm<TPasswordForm>({
        resolver: yupResolver(PasswordResetValidationSchema),
        mode: 'onChange'
    });
    async function submitForm(data: TPasswordForm): Promise<void> {
        try {
            const response = await password(data)
            success(response.message, 1000)
            router.push({
                pathname: '/forget-password/verify',
                query: { email : data.email}
            });
        } catch(e:any) {
          error(e.message || "An error occurred!");
        }
    }
    return {
        handleSubmit,
        submitForm,
        formState,
        errors,
        register,
    }
}
export default usePasswordForm