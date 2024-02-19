import { TProductTesting } from "@app/constant/details";
import Image from "next/image";
import { format_price } from "@app/utils/helper";
import Quantity from "@app/components/atoms/Quantity";
import styled from "styled-components";
import { useState } from "react";

interface CartContentProps {
    item: TProductTesting;
}

const CountQuantity = styled.div`
    width: 100px;
    max-height: 30px;
    background: #E6E6E6;
    border-radius: 7px;
    position: relative;
    margin-top: 0;
`;

export const CartTable = styled.table`
    width: 50%;
    border-collapse: collapse;
`;


export const CartTableCell = styled.td`
    padding: 10px;
    border: none;
    flex-grow: 1;
`;

const CartContent: React.FC<CartContentProps> = ({ item}) => {
  const [quantity, setQuantity] = useState(item.product_count);

    const handleQtyIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleQtyDecrease = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
      <CartTable>
        <tr>
            <CartTableCell>
                <div className="flex items-center space-x-4">
                    <div>
                        <Image
                            src={item.featured_image}
                            width={60}
                            height={60}
                            alt=""
                        />
                    </div>
                    <p>{item.title}</p>
                </div>
            </CartTableCell>
            <CartTableCell>
                <CountQuantity>
                   <Quantity
                        cartQuantity={item}
                        handleQtyIncrease={()=> handleQtyIncrease}
                        handleQtyDecrease={() => handleQtyDecrease}
                    />
                </CountQuantity>
            </CartTableCell>
            <CartTableCell className="text-[#F49342] relative left-[4rem]">
                {format_price(item.price)}
            </CartTableCell>
        </tr>
        </CartTable>
    );
}

export default CartContent;
