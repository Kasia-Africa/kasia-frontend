import {     TContactForm,
    TContactData} from "@app/types";
import postData from "@app/helpers/postData";

export default function useEmail() {
    
    async function contact_us (data: TContactForm): Promise<TContactData> {
        const url = 'contact'
        const response = await postData<TContactForm, TContactData>(url, data);
        return response;
    }   
    return {
        contact_us
    };
}