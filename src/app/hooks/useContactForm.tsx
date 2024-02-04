import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { TContactForm } from '../types';
import { contactUsValidationSchema } from '../utils/validations';
import useEmailService from './useEmailService';
import useNotify from './useNotify';


function useContactForm() {
    const { contact_us } = useEmailService();
    const { error, success } = useNotify();
    const { control, register, handleSubmit, formState, formState: { errors }, reset } = useForm<TContactForm>({
        resolver: yupResolver(contactUsValidationSchema),
        mode: 'onChange'
    });

    async function submitForm(data: TContactForm): Promise<void> {
        try {
          const response = await contact_us(data);
          success(response.message || 'Your message was sent successfully, thank you.', 1000);
          reset();
        } catch (e: any) {
          console.log(e);
          error(e.message || 'An error occurred sending your message, please try again.');
        }
      }
      return {
        control,
        handleSubmit,
        submitForm,
        formState,
        errors,
        register,
        reset
      };
}



export default useContactForm;