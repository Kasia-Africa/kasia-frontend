"use client"
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Container as ContainerStyle, StyledCard as StyledCardStyle } from '@app/components/ui/auth.styles';
const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-Italic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-Bold.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-BoldItalic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-ExtraBold.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-ExtraBoldItalic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-Thin.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-ThinItalic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-ExtraLight.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-ExtraLightItalic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-Light.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-LightItalic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-Medium.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-MediumItalic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-SemiBoldItalic.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-Black.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Poppins'), url('/fonts/poppins/Poppins-BlackItalic.ttf') format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Poppins', san-serif;
  }

  input {
    &:focus,
    &:active,
    &:visited,
    &:focus-visible,
    &:target,
    &:-internal-autofill-selected {
      outline: none;
      background-color: transparent !important;
    }
  }
`;

export default GlobalStyles;
export {
  ContainerStyle,
  StyledCardStyle
}