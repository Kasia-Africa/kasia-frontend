import styled from 'styled-components';
import styledMap from 'styled-map';
export interface CardProps {
    children: React.ReactNode;
    height?: 'high' | 'default';
    width?:  'shop'| 'default';
    padding?: 'sm' | 'md' | 'lg'|'default';
    className?: string;
    text?: string
  }
  

const cardWidth = styledMap('width', {
    default: '30rem',
})
const cardPadding = styledMap('padding', {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    default: '2.5rem 3rem'
})

const CardWrapper = styled.div<CardProps>`
background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  border-radius: 0.115rem;
  max-width: ${cardWidth};
  padding: ${cardPadding};
`;


const AuthCard: React.FC<CardProps> = ({ children, ...props }) => {
    return <CardWrapper {...props}>{children}</CardWrapper>;
  };
  
  export default AuthCard;
