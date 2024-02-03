import React from 'react';
import InputWithIcon from '.';

export default {
  component: InputWithIcon,
  title: 'Input With Icon',
};

export const EmailInput = (): JSX.Element => (
  <InputWithIcon 
  iconDataUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='14' fill='none'%3E%3Cpath fill='%236B6B6B' fill-rule='evenodd' d='M15.666.334H2.333c-.917 0-1.659.75-1.659 1.667L.666 12c0 .916.75 1.666 1.667 1.666h13.333c.917 0 1.667-.75 1.667-1.666V2c0-.917-.75-1.667-1.667-1.667Zm0 11.667H2.333V3.667l6.666 4.167 6.667-4.167v8.334ZM2.333 2l6.666 4.166 6.667-4.166H2.333Z' clip-rule='evenodd'/%3E%3C/svg%3E"  
  placeholder='Email' />
);