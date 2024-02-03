import useSWR from 'swr';
import { TUpdateUser, TUserData } from '@app/types';
import getData from '@app/helpers/getData';
import putData from '@app/helpers/putData';


function useR() {
    // const { mutate } = useSWRConfig();
    const { data: user, error, isValidating: loading, mutate } = useSWR<TUserData>(
        `profile/me`,
        getData,
    );

    const main_delivery_address = user?.user.main_delivery_address;

    async function updateUser(data: TUpdateUser) {
        const path = 'profile/me';
    
        await putData<TUpdateUser, TUserData>(path, data);
    
        await mutate();
      }
    
    return {
        user,
        main_delivery_address,
        error,
        loading,
        updateUser
      };
}

export default useR;