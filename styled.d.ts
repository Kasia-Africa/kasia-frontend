import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<
      | 'green'
      | 'white'
      | 'orange'
      | 'grey'
      | 'black'
      | 'darkgreen',
      string
    >;
    font: {
      body: string;
    };
  }
}