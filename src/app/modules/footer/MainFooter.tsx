import React from 'react';
import styled from 'styled-components';
import { Separator } from '@app/components/atoms/Separator';
import { FooterListWrapper, PageWrapper } from '@app/components/ui/PageElement';
import { Button } from '@app/components/atoms/Buttons';
import InputAtom from '@app/components/atoms/Inputs';
import Image from 'next/image';
import { FiTwitter } from "react-icons/fi";
import { CiInstagram, CiYoutube } from 'react-icons/ci';
import { TiSocialFacebook } from "react-icons/ti";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineLinkedin } from "react-icons/ai";
import {FaGooglePlusG, FaWhatsapp } from "react-icons/fa"
import Link from 'next/link';
const Footer = styled.footer`
    background: radial-gradient(88.48% 72.82% at 50% 75.83%, #344634 0%, #171717 100%);
    padding: 3rem 0;
    margin-top: 70px;
`;
const FooterHeading = styled.h1`
font-weight: 600;
`;
const Description = styled.p`
font-size: 12px;
margin-top: -4px;
`;
const PaymentMethod = styled.li`
     display: flex;
     flex-wrap: wrap;
     gap: 6px;
     align-items-center;
     border-radius: 5px;
     padding-right: 17px;
     padding-top: 8px;
`
const SocialIcons = styled.div`
display: flex;
margin-top: 12px;
flex-wrap: wrap;
gap: 10px;
width: 60%;
`;
const ListHeader = styled.h3`
font-weight: 550;
text-transform: uppercase;
line-height: 1.125;
margin-bottom: 1rem;
`
export default function MainFooter() {
    return (
        <Footer>
            <PageWrapper>
                <div className='grid grid-cols-3 gap-24 pb-7 mb-5'>
                   <Image 
                    src='/plusity-logo.png'
                    alt='kasia Image'
                    height= {220}
                    width={220}
                    className='cursor-pointer'
                    />
                    <div className='text-slate-100 text-xs'>
                        <FooterHeading className=''>Subscribe NewsLetter</FooterHeading>
                        <Description>Subscribe to our mailing list to get the update to your mail</Description>
                        <div className='relative mt-5'>
                        <InputAtom
                        type="text"
                        placeholder='Email'
                        padding='xs'
                        width='footer'
                        radius='footer'
                        ph='footer'
                        className='text-black'
                        />
                        <Button padding='xxxs' className='absolute right-[78px] top-[5px] w-[45%]' width='book'>
                            <p className='text-[10px]'>Subscribe</p>
                        </Button>
                        </div>
                    </div >
                    <div className='text-slate-100 text-xs'>
                        <FooterHeading>Download Kasia App </FooterHeading>
                        <Description> Get access to exclusive offers!</Description>
                        <div className='flex mt-5'>
                        <Image src="/play-store-black.png" alt='Play store' height={113} width={130} className='mr-2'/>
                        <Image src="/app-store.png" alt="App-store" height={100} width={130} />
                        </div>
                    </div>
                </div>
                <Separator />
                <PageWrapper className='flex justify-center p-10 text-slate-100 text-sm'>
                    <FooterListWrapper>
                        <ListHeader> Get to Know Us</ListHeader>
                        <Link href={'/'}>About Us</Link>
                        <Link href={'/register'}>Sign Up</Link>
                        <Link href={'/'}>Menbership</Link>
                        <Link href={'/'}>Help Center</Link>
                        <Link href={'/'}>Press/Media</Link>
                        <Link href={'/'}>Careers</Link>
                    </FooterListWrapper>
                    <FooterListWrapper>
                        <ListHeader className='font-[550] w-[250px] uppercase leading-3 mb-4'>Shopping, Shipping and Delivery</ListHeader>
                        <Link href={'/'}>Account details</Link>
                        <Link href={'/'}>Track Orders</Link>
                        <Link href={'/'}>Order History</Link>
                        <Link href={'/'}>Shopping Shipping & FAQ</Link>
                        <Link href={'/'}>Delivery Options</Link>
                        <Link href={'/'}>Return and Refunds</Link>
                        </FooterListWrapper>
                    <FooterListWrapper>
                        <ListHeader>Doing Business</ListHeader>
                        <Link href={'/'}>Become A shopper</Link>
                        <Link href={'/'}>Be A partner Store</Link>
                        <Link href={'/'}>Get Kasi for delivery</Link>
                        <Link href={'/'}>Refferal Program</Link>
                        <Link href={'/'}>Return and Refunds</Link>
                        <Link href={'/'}>Delivery Option</Link>
                        </FooterListWrapper>
                        <FooterListWrapper>
                        <ListHeader>Community</ListHeader>
                        <Link href={'/'}>Blog</Link>
                        <Link href={'/'}>Contact us</Link>
                        <Link href={'/'}>Privacy</Link>
                        <Link href={'/'}>Terms Of service</Link>
                        </FooterListWrapper>
                    <FooterListWrapper>
                    <ListHeader>Payment Methods</ListHeader>
                    <PaymentMethod>
                     <Image
                    src='/logos.svg'
                    alt=''
                    height={29}
                    width={92}
                    />
                      <Image
                    src='/vervelg.svg'
                    alt=''
                    height={22}
                    width={56}
                    />
                     <Image
                    src='/interswitch.png'
                    alt=''
                    height={31}
                    width={74}
                    />
                     <Image
                    src='/paylg.svg'
                    alt=''
                    height={31}
                    width={70}
                    />
                    </PaymentMethod>
                    <Separator className='w-50 mt-2.5'/>
                    <ListHeader>Join Us On</ListHeader>
                    <SocialIcons>
                        <Link href={'/'}><FiTwitter size={23}/></Link>
                        <Link href={'/'}><CiInstagram size={23}/></Link>
                        <Link href={'/'}><TiSocialFacebook size={23}/></Link>
                        <Link href={'/'}><FaWhatsapp size={23}/></Link>
                        <Link href={'/'}><FaGooglePlusG size={23}/></Link>
                        <Link href={'/'}><CiYoutube size={23}/></Link>
                        <Link href={'/'}><PiTelegramLogo size={23}/></Link>
                        <Link href={'/'}><AiOutlineLinkedin size={23}/></Link>
                    </SocialIcons>
                    </FooterListWrapper>
                </PageWrapper>
                <Separator/>
                <div className='flex w-full justify-center text-white'>
                    <p className='mt-8 text-[#FFFFFF]'>&copy; Copyright Plusity {new Date().getFullYear()}. All rights reserved</p>
                </div>
            </PageWrapper>
        </Footer>
    );
}