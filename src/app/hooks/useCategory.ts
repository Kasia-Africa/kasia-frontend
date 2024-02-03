import getData from "@app/helpers/getData";
import {TProductCategory } from "@app/types";

export default function useCategory() {
  async function productCategory (): Promise<TProductCategory> {
    try {
        const path = 'products/categories';
        const response = await getData<TProductCategory>(path);
        return response;
      } catch (error) {
        console.error('Error in productCategory:', error);
        throw error;
      }
  }
  return {
    productCategory
}
} 
