import { TProductTesting } from '@app/constant/details';
import React from 'react';

interface QuantityProps {
  cartQuantity: TProductTesting;
  handleQtyIncrease: ()=> void
  handleQtyDecrease: ()=> void
}

const Quantity: React.FC<QuantityProps> = ({cartQuantity, handleQtyDecrease, handleQtyIncrease}) => {
  return (
    <ul className="flex pl-4 pr-4 pt-2.5 justify-between h-20 cursor-pointer">
      <li onClick={handleQtyDecrease}>-</li>
      <li className="cursor-not-allowed">{cartQuantity.product_count}</li>
      <li onClick={handleQtyIncrease}>+</li>
    </ul>
  );
};

export default Quantity;
