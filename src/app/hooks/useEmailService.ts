import {  EmailServiceType,
  TContactForm } from "@app/types";
import useEmail from "./useEmail";


export default function useEmailService(): EmailServiceType {
    const email = useEmail();

    async function contact_us(value: TContactForm) {
      const response = await email.contact_us(value);  
      return response;
    }

    return {
        contact_us,
      };
}