import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button , ButtonProps} from '.';

export default {
    component: Button,
    title: 'Atoms/Button',
};

export const Active:React.FC<ButtonProps> = () => <Button onClick={action('Button-click')} padding='xs' width="wide">Subscribe</Button>;
export const Facebook:React.FC<ButtonProps> = () => <Button onClick={action('Button-click')} padding='xs' width="wide" kind='facebook'>Continue with facebook</Button>;

