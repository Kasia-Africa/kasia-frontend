// stories/Input.stories.tsx
import React from 'react';
// import { Meta, Story } from '@storybook/react';
import InputAtom from '.';

export default {
  title: 'Atoms/Input',
  component: InputAtom,
} 

export const InputAtom1 = () => <InputAtom placeholder='email' required padding='xs'/>
export const InputAtom2 = () => <InputAtom placeholder='password' required padding='xs'/>
export const InputAtom3 = () => <InputAtom placeholder='confirm password' required padding='xs'/>
export const InputAtom4 = () => <InputAtom placeholder='reset Password' required padding='xs'/>
export const InputAtom5 = () => <InputAtom placeholder='name' required padding='xs'/>
