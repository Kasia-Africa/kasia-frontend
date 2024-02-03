import type { Preview } from '@storybook/react';

import { withThemeByClassName, withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import KasiaStyles from '../src/app/styles/themeProvider';
import theme from '../src/app/styles/theme';
import '../src/app/styles/globals.css'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
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
  
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
  withThemeFromJSXProvider({
    themes: theme,
    defaultTheme: 'light',
    GlobalStyles,
    // Provider: KasiaStyles
  })
  ]
};

export default preview;
