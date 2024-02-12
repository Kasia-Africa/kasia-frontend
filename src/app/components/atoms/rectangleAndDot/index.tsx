import Image from "next/image"
import styled from "styled-components"

const RectangleAndDot = styled.div`
 display: flex;
 justify-content: center;
 position: relative;
 left: 0;
 right: 0;
 top: 10px;
`
export const RecAndDot = ()=> {
    return( 
    <RectangleAndDot>
            <Image
            src='/Rectangle.svg'
            alt='rec'
            width={56}
            height={7}
            className='mr-1'
            />
            <Image
            src='/Oval.svg'
            alt=''
            width={8}
            height={8}
            />
    </RectangleAndDot>
    )
}


