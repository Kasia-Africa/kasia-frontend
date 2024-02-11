import AuthCard, {CardProps} from '.';
export default {
    title: 'Atoms/AuthCard',
  component: AuthCard
}

export const CardTest:React.FC<CardProps> = ()=> <AuthCard height='high'>Default</AuthCard>
export const CardTest1:React.FC<CardProps> = ()=> <AuthCard>Minimum</AuthCard>


