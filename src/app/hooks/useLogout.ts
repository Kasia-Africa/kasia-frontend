import postData from '@app/helpers/postData';
import Cookies from 'js-cookie';
import { useRouter  } from 'next/router';
import useNotify from './useNotify';

export default function useLogout() {

    const { push } = useRouter();

    const { success } = useNotify();

    async function logout() {
        try {
            await postData('logout');
            Cookies.remove('access_token');
            success('Logout was successful', 1000);
            push('/login');
        } catch(e: any) {

        }
    }

    return logout;
}