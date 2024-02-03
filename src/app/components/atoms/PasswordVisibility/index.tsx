import styled from "styled-components";
interface Props {
    isPasswordVisible: boolean;
    iconDataUrl?: string;
}
export const PasswordVisible = styled.span<Props> `
position: absolute;
bottom: 5%;
cursor: pointer;
width: max-content;
height: max-content;
right: 0;
padding: 1rem;
  background-image: url("${({isPasswordVisible })=> isPasswordVisible ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='19' fill='none'%3E%3Cpath fill='%23A0A0A0' fill-rule='evenodd' d='M3.28 3.55 1 1.27 2.27 0 20 17.73 18.73 19l-2.93-2.92-.42-.42c-1.35.54-2.83.84-4.38.84-5 0-9.27-3.11-11-7.5.78-1.98 2.08-3.7 3.74-4.99l-.46-.46ZM16 9c0-2.76-2.24-5-5-5-.65 0-1.26.13-1.83.36L7.01 2.2c1.24-.45 2.58-.7 3.98-.7 5 0 9.27 3.11 11 7.5-.73 1.86-1.92 3.49-3.43 4.75l-2.92-2.92c.23-.57.36-1.18.36-1.83ZM6.53 6.8l1.55 1.55C8.03 8.56 8 8.78 8 9c0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2Zm7.46 2.37-3.15-3.15.17-.01c1.66 0 3 1.34 3 3l-.02.16Z' clip-rule='evenodd'/%3E%3C/svg%3E" :
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='22' height='19' fill='%23A0A0A0' stroke='%23A0A0A0' stroke-width='.45' viewBox='0 0 37.519 37.519'%3E%3Cpath stroke='%23CCC' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.651' d='M37.087 17.705c-.334-.338-8.284-8.276-18.327-8.276S.766 17.367.433 17.705a1.499 1.499 0 0 0 0 2.107c.333.34 8.284 8.277 18.327 8.277s17.993-7.938 18.327-8.275a1.505 1.505 0 0 0 0-2.109zM18.76 25.089c-6.721 0-12.604-4.291-15.022-6.332 2.411-2.04 8.281-6.328 15.022-6.328 6.72 0 12.604 4.292 15.021 6.332-2.412 2.041-8.28 6.328-15.021 6.328zm0-12.08a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 1 1 0-11.5z'/%3E%3Cpath d='M37.087 17.705c-.334-.338-8.284-8.276-18.327-8.276S.766 17.367.433 17.705a1.499 1.499 0 0 0 0 2.107c.333.34 8.284 8.277 18.327 8.277s17.993-7.938 18.327-8.275a1.505 1.505 0 0 0 0-2.109zM18.76 25.089c-6.721 0-12.604-4.291-15.022-6.332 2.411-2.04 8.281-6.328 15.022-6.328 6.72 0 12.604 4.292 15.021 6.332-2.412 2.041-8.28 6.328-15.021 6.328zm0-12.08a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 1 1 0-11.5z'/%3E%3C/svg%3E"
}");
  background-repeat: no-repeat;
`;