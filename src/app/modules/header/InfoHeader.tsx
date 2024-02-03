import { Button } from '@app/components/atoms/Buttons';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const MainList = styled.ul`
display: flex;
font-style: white;
font-size: 14px;
width: 100%;
letter-spacing: 0.12px;
text-decoration: none;
color: white;
cursor: pointer;
& li {
    padding: 20px;

}
`;

const HeaderContent = styled.div`
display: flex;
justify-content: space-between;
`;
interface HeaderProps {
  logoSrc: string;
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, appName}) => {
  const pathname = usePathname();
const router = useRouter()
const handleLogoLink = () => {
    if (pathname !== '/login' && pathname !== '/signup') {
        router.push('/')
    }
}
  return (
    <header className={`flex flex-col justify-between pt-11 pb-24 capitalize overflow-x-hidden`}>
       <HeaderContent>
       <div>
       <img 
       src={logoSrc}
        alt={appName} 
        width={215}
         height={59}
        className=' py-2 px-4 cursor-pointer'
        onClick={handleLogoLink}
       />
       </div>
       <div className=''>
          <MainList>
            <li>Locations</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Help</li>
            <li>Login</li>
           <li><Button padding='xxs' width='wide' className='border-[0.5px] border-white rounded-md relative bottom-3'><p className='capitalize'>Become A Shopper</p></Button></li> 
          </MainList>
       </div>
       </HeaderContent>
    </header>
  );
};

export default Header;
