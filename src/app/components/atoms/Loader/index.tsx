import React, { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';


export default function Loader({ color, height } : { color?: string, height?: number}) {
    const theme = useContext(ThemeContext);
  
    return (
        <div className="flex items-center justify-center">
            <ThreeDots color={color || theme?.color.white} height={height || 16} />
        </div>
    );
}
