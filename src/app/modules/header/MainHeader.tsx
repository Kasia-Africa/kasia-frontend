import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import InputAtom from '@app/components/atoms/Inputs';
import { CartIcon} from '@app/components/atoms/cart_icon';
import { ProfilePicture } from '@app/components/atoms/profile-picture';
import { NotificationIcon } from '@app/components/atoms/notification';
import Link from 'next/link';
import CartProvider from '@app/store/cart-provider';
import { PageWrapper } from '@app/components/ui/PageElement';
import useR from '@app/hooks/useR';
import Loader from '@app/components/atoms/Loader';
const NotificationContainer = styled.div`
  display: inline-flex;
  position: relative;
  gap: 15px;
`

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 18px;
  // width: 100%; 
  align-items: center;
  z-index: 30;
`;

const MenuItemList = styled.ul`
  display: flex;
  margin-top: 20px;
  padding: 20px 0;
  color: #fff;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;

  li {
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    white-space: nowrap;
    font-size: 17px;

    input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 0;
      min-width: 100%;

      &::placeholder {
        color: ${({ theme }) => theme.color.white};
      }
    }

    &.delivery-address {
      &:hover {
        text-decoration: none;
      }
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header: React.FC = () => {
  const [deliveryAddress, showDeliveryAddressInput] = useState(false);
  const { main_delivery_address, loading, updateUser } = useR();
  const [delivery_address, setDeliveryAddress] = useState(main_delivery_address);


  const showDeliveryAddress = () => {
    showDeliveryAddressInput((isShow)=> !isShow);
    if(deliveryAddress) updateUser({main_delivery_address: delivery_address})
  }

  useEffect(() => {
    if (main_delivery_address) {
      setDeliveryAddress(main_delivery_address)
    }
}, [main_delivery_address])

  return (
      <PageWrapper>
    <HomeHeader>
      <Link href={`/`} title='Home'>
        <Image
            src={`/plusity-logo.png`}
            alt={`plusity-logo`}
            width={200}
            height={50}
        />
      </Link>
        
        <div className='flex relative'>
        <InputAtom
          type='search'
          placeholder='search for products' 
          width="search"
          radius='search'
           className='h-[40px] pl-5'
           />
           <Image
           src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='33' fill='none'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M12.708 26h.79l4.99 5-1.49 1.49-5-4.99v-.79l-.27-.28A6.471 6.471 0 0 1 7.498 28a6.5 6.5 0 1 1 6.5-6.5c0 1.61-.59 3.09-1.57 4.23l.28.27Zm-9.71-4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5Z' clip-rule='evenodd' opacity='.528'/%3E%3C/svg%3E"
           alt=''
           width={19}
           height={33}
           className='absolute right-3 top-[-3px]'
           />
           </div>
     <NotificationContainer>
      <NotificationIcon />
       <CartIcon />
       <ProfilePicture/>
       </NotificationContainer>
    </HomeHeader>
    <MenuItemList>
        <li>
          <Link href={`/`} title='Home'>
            Home
          </Link>
        </li>
        <li className='delivery-address'>
          {loading ? <Loader height={8} /> :
           `Delivery Location: ${ !deliveryAddress && main_delivery_address  || '' }` }
          { deliveryAddress && <InputAtom name='user-delivery-address' type='text' value={ delivery_address } onChange={e => setDeliveryAddress(e.target.value)}/> }
          <button type='button' className='pl-4' onClick={showDeliveryAddress}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7238 2.48591C17.0921 2.85419 17.0921 3.44911 16.7238 3.81739L14.9957 5.54548L11.4545 2.0043L13.1826 0.276212C13.5509 -0.0920707 14.1458 -0.0920707 14.5141 0.276212L16.7238 2.48591ZM0 17V13.4588L10.4441 3.01472L13.9853 6.5559L3.54118 17H0Z" fill="#FE9F08"/>
          </svg>
          </button>
        </li>
    </MenuItemList>
    </PageWrapper>
  );
};

export default Header;
