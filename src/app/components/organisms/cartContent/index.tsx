import { TProductTesting } from "@app/constant/details";
import Image from "next/image";
import { format_price } from "@app/utils/helper";
import Link from "next/link";
import Quantity from "@app/components/atoms/Quantity";
import styled from "styled-components";
import { CartGrid } from "../cart_items";

interface cartContentProp {
    item: TProductTesting
}
const CountQuantity = styled.div`
width: 100px;
max-height: 30px;
background: #E6E6E6;
border-radius: 7px;
position: relative;
// top: calc(10px - 2.5px);
margin-top: 0;
`
const CartContent: React.FC<cartContentProp> = ({item}) => {
    return (  
        <CartGrid>
              <div className="flex aspect-square">
                <div className="">
                <Image 
                src={item.featured_image}
                width={60}
                height={60}
                alt=""
              />
                </div>
              <p className="absolute left-32 mt-5 " >{item.title}</p>
              </div>
              <CountQuantity>
              <Quantity
                cartQuantity={item}
                handleQtyIncrease={()=>{}}
                handleQtyDecrease={()=>{}}
                />
              </CountQuantity>
              <div className="text-[#F49342]">{format_price(item.price)}</div>
        </CartGrid>
    );
}
 
export default CartContent;