import {MouseEvent, useState} from 'react'
import Image from "next/image"
import styled from 'styled-components'

const LikeButtonContainer = styled.div`
position: absolute;
margin: 11.3px 11.8px 250.43px 186.52px;
`
export const LikeButton = ()=> {
   const [isLiked, setIsLiked] = useState(false)
   const handleLike = (e: MouseEvent<HTMLImageElement>)=> {
   e.preventDefault()
   setIsLiked(!isLiked)
   }
    return (
        <LikeButtonContainer>
        <Image
        src= {isLiked ?
         `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='793.701' height='1000'%3E%3Cpath fill='%230f0' stroke='%230f0' stroke-width='18.7' d='M292.243 325.146c-93.193 0-168.827 68.619-168.827 153.167 0 172.001 191.243 217.099 321.562 387.141 123.208-168.999 321.563-220.631 321.563-387.141 0-84.548-75.635-153.167-168.827-153.167-67.598 0-125.779 36.212-152.736 88.31-26.957-52.098-85.137-88.31-152.735-88.31z'/%3E%3C/svg%3E` 
         :
          `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='16' fill= 'none' %3E%3Cpath fill='%2326D93E' fill-rule='evenodd' d='M9.25 2.093A5.299 5.299 0 0 1 13.19.305c2.699 0 4.819 2.07 4.819 4.705 0 3.23-2.974 5.864-7.48 9.853l-.01.01-1.27 1.13-1.271-1.121-.035-.03C3.452 10.864.488 8.234.488 5.01c0-2.635 2.12-4.705 4.819-4.705 1.524 0 2.987.693 3.942 1.788Zm0 11.6.087-.086c4.17-3.687 6.92-6.125 6.92-8.597 0-1.711-1.313-2.994-3.066-2.994-1.349 0-2.663.847-3.118 2.019H8.434c-.464-1.172-1.778-2.02-3.127-2.02C3.555 2.016 2.24 3.3 2.24 5.01c0 2.472 2.751 4.91 6.922 8.597l.087.086Z' clip-rule='evenodd'/%3E%3C/svg%3E`     
        }
        alt=''
        width={19}
        height={16}
        className={`relative`}
        onClick={handleLike}
        /> 
         </LikeButtonContainer>
    )
}