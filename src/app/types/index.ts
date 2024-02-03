export interface TAuthForm {
    login: string;
    password: string;
}

export interface TRegisterForm {
    username: string;
    email: string;
    main_delivery_address: string;
    password: string;
    password_confirmation: string;
}
export interface TResetPasswordForm {
    password: string;
    password_confirmation: string;
    email?: string;
    reset_code?: number;
}
export interface TPasswordForm {
    email: string;
}
export interface TVerifyEmail {
    reset_code: string;
    email?: string;
}
export interface TAuthData {
    access_token: string;
    user: User;
}

export interface TUserData {
    success: boolean;
    message: string;
    user: User;
}
export interface TResetData {
    // access_token: string;
    user: ResetUser;
}

export type ResetUser = {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    main_delivery_address: string;
    verify_code: string;
    email_verified_at: string;
    password: string;
}

export type User = {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    main_delivery_address: string;
    verify_code: string;
    email_verified_at: string;
};

export interface TUpdateUser {
    firstName?: string;
    lastName?: string;
    phone?: string;
    main_delivery_address?: string;
  }

export type AuthServiceType = {
    login: (data: TAuthForm) => Promise<void>;
    signup: (data: TRegisterForm)=> Promise<void>;
    password: (data: TPasswordForm)=> Promise<TUserData>;
    verifyEmail: (data: TVerifyEmail)=> Promise<TUserData>;
    updatePassword: (data:TResetPasswordForm)=> Promise<TUserData>
};

export type EmailServiceType = {
    contact_us: (data: TContactForm) => Promise<TContactData>;
}
export type ContactUsPayload = {
    recipient: string;
    subject: string;
    html: string;
}

export interface TContactForm {
    name: string;
    email: string;
    phonenumber?: string;
    message: string;
}

export interface TContactData {
    success: boolean,
    message: string,
    data: TContactForm
}

export interface TProductCategory {
    id: number,
    title: string,
    color: string,
    description: string,
    featured_image: string,
    products_count: number,
}

export interface ProductCategoryData {
    success: boolean,
    message: string,
    product_categories: TProductCategory[]
}

export interface HomeCategoryProductsData {
    success: boolean,
    message: string,
    data: HomeCategoryProduct[]
}

export interface HomeCategoryProduct {
    id: number,
    name: string,
    slug: string,
    data: TProduct[]
}

export interface TProduct {
    id: number,
    title: string;
    slug: string;
    description: string;
    price: number;
    featured_image: string;
    product_count?: number;
    main_product_category_id: number;
  }

export interface CategoryProductData {
    success: boolean,
    message: string,
    products: TProduct[]
}