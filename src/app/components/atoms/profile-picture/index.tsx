import useLogout from '@app/hooks/useLogout';
import React, { useState, useRef, useEffect } from 'react'
import Image from "next/image"
import styled from "styled-components"
import Link from 'next/link';
import isAuthenticated from '@app/helpers/isAuthenticated';

const ProfilePictureContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
`
const DropDownIcon = styled.div`
  // position: absolute;
`

const DropDownItems = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px;
  position: absolute;
  z-index: 1;
  top: calc(100% + 10px);
  border-radius: 10px;
  right: 0;
  min-width: 150px;
  width: 100%;
  cursor: pointer;


  li {
    color: ${({ theme }) => theme.color.black};
    font-weight: 400;
    padding: 6px;
    width: 100%;
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.color.orange};
    }
  }
`

export const ProfilePicture = ()=> {
  const profileMenuDropDown = useRef<any>()
  const [showDropDownItems, setShowDropDownItems] = useState(false)
  const logout = useLogout();
  const handleDropDown = (e:React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
    setShowDropDownItems((prev)=> !prev);
  };
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!profileMenuDropDown.current.contains(event.target)
      )
        {
        setShowDropDownItems(false);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

    return (
      <ProfilePictureContainer ref={profileMenuDropDown}>
        {
            isAuthenticated() ? 
              <Link href={`/profile/me`} title='My Profile'>
                <Image
                  src = "/profileme.jpg"
                    alt= ""
                    height = {40}
                    width = {40}
                    className='rounded-full'
                />
              </Link>
        :
            <Image
              src = "/profileme.jpg"
                alt= ""
                height = {40}
                width = {40}
                className='rounded-full'
            />
        }
       
        <DropDownIcon 
        onClick={handleDropDown}
       >
          <Image
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='5' fill='none'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M5.499 6.006.989.988h9.02l-4.51 5.018Z' clip-rule='evenodd'/%3E%3C/svg%3E"
            alt= ""
            height= {5}
            width = {9}
            className={`relative cursor-pointer`}
          />
       </DropDownIcon>
       {
        showDropDownItems && 
          <DropDownItems>
          {
            isAuthenticated() ? 
            <>
               <li>
                <Link href={`/profile/me`} title='My Profile'>My Profile</Link>
              </li> 
              <li>
                <button onClick={logout} title="Logout">Logout</button>
              </li>
            </> : 
            <li>
              <Link href={'/login'} title='Login'>Login</Link>
            </li>
          }
      </DropDownItems>
      }
      
      </ProfilePictureContainer>
    )
}