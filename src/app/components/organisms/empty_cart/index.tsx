"use client"
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

// I will build the cart ui soon;
const EmptyCart = () => {
    return (  
        <div className='flex flex-col items-center justify-center mt-28'>
            <div className='text-2xl '>Your cart is empty</div>
            <div>
              <Link href={'/'} className='text-green-500 flex items-center gap-1 mt-2'>
                <MdArrowBack/>
                  <span>Start Shopping</span>
              </Link>
            </div>
    </div>
    );
}
 
export default EmptyCart;