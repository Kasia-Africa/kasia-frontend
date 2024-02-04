import Image from "next/image"
import styled from "styled-components"

const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
const OvalContainer = styled.div`
 position: absolute;
 right: 0;
 top: 5px;
`
export const NotificationIcon = ()=> {
return (
    <IconContainer>
      <Image
       src= "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='32' fill='none'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M22.522 14.5v7.954l3.217 3.182v1.59H0v-1.59l3.217-3.182v-7.955c0-4.9 2.623-8.972 7.24-10.054V3.363c0-1.32 1.077-2.386 2.413-2.386 1.335 0 2.413 1.065 2.413 2.386v1.082c4.6 1.082 7.239 5.17 7.239 10.054Zm-6.435 14.317c0 1.75-1.448 3.182-3.217 3.182-1.786 0-3.218-1.431-3.218-3.181h6.435Z' clip-rule='evenodd'/%3E%3C/svg%3E"
       alt=""
       width={26}
       height={32}
      />
      <OvalContainer>
        <Image
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath fill='%23F49342' fill-rule='evenodd' d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z' clip-rule='evenodd'/%3E%3C/svg%3E"
        alt=""
        width={14}
        height={14}
        className=""
        />
      </OvalContainer>
  </IconContainer>
)
}
