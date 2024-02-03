import React from 'react';
import { Button } from '@app/components/atoms/Buttons';
import { FaFacebookF } from 'react-icons/fa';


export default function FacebookButton() {

    return (
        <Button kind="facebook" padding="xxs" width="wide" className="mt-2 text-[11px] text-white" font-size="xs">
            <FaFacebookF size={16} color="white" className="relative right-4" />
            Continue with Facebook
        </Button>
    );
}
