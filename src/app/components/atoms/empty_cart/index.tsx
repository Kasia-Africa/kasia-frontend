"use client"
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

// I will build the cart ui soon;
const EmptyCart = () => {
    return (  
        <div className='flex flex-col items-center justify-center'>
          <Image 
            src={'/images/empty-cart.png'} 
            width={400} 
            height={400} 
            alt="empty-cart" />
          <h2 className='text-2xl '>Your cart is empty!</h2>
            <Link href={'/shop'} className='text-green-500 flex items-center gap-1 mt-2'>
              <MdArrowBack/>
                <span>Start Shopping</span>
            </Link>
        </div>
    );
}
 
export default EmptyCart;