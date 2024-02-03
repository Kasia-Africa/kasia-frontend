import styled, { keyframes } from 'styled-components';
import Input from '@app/components/atoms/Inputs';

interface Props {
  iconDataUrl: string;
}

const autofillHack = (iconUrl: string) => keyframes`
    to {
      background-image: url("${iconUrl}");
    }
`;

const InputWithIcon = styled(Input)<Props>`
  background-image: url("${({ iconDataUrl }) => iconDataUrl}");
  background-repeat: no-repeat;
  background-position: 1rem 50%;
  padding: 1rem 2.5rem;

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    animation-name: ${({ iconDataUrl }) => autofillHack(iconDataUrl)};
    animation-fill-mode: both;
  }

`;

export default InputWithIcon;