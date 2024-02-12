import styled from 'styled-components';
import styledMap from 'styled-map';

export interface CardProps {
    children: React.ReactNode;
    height: 'all'| 'shop' | 'default';
    width:  'all'| 'shop'| 'default' | 'desc';
    className?: string;
    text?: string;
    color: string
  }
  

const cardWidth = styledMap('width', {
     all: '215.91px',
    shop: '215.913px',
    desc: '414px',
    default: '288.73px',
})

const CardWrapper = styled.div<CardProps>`
  border-radius: 0.115rem;
  flex-shrink: 0;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.07);
  // max-width: ${cardWidth};
  padding: 25px;
  display: flex !important;
  height: 100%;
  ${({ color }) => color && `background-color: ${color};`}
`;


const ProductCategoryCard: React.FC<CardProps> = ({ children, ...props }) => {
    return <CardWrapper {...props}>{children}</CardWrapper>;
  };
  
  export default ProductCategoryCard;
