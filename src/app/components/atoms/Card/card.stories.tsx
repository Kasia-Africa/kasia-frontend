import AuthCard, {CardProps} from '.';
export default {
    title: 'Atoms/AuthCard',
  component: AuthCard
}

export const cardTest:React.FC<CardProps> = ()=> <AuthCard height='high'>Default</AuthCard>
export const cardTest1:React.FC<CardProps> = ()=> <AuthCard>Minimum</AuthCard>


