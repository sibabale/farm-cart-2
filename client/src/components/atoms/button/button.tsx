import Link from '../link/link';
import { ButtonIcon, ButtonContainer } from "./button.styles";
import {ButtonProps} from '../../../types/props/atoms';

export const Button = ({
  as, 
  to, 
  bg, 
  icon, 
  size, 
  text, 
  color, 
  isRound, 
  iconAlt, 
  onClick,
  children, 
  borderColor, 
  iconPosition 
}: ButtonProps) => {

  const ButtonComponent = () =>  (
    <ButtonContainer 
      $bg={bg}
      $size={size}
      $color={color}
      onClick={onClick}
      $isRound={isRound}
      $borderColor={borderColor}
    >
      {
        iconPosition === 'start' && icon ? (
          <ButtonIcon $iconPosition={iconPosition} src={icon} alt={iconAlt} />
        ): ''
      }
      {text}
      {children}
      {
        iconPosition === 'end' && icon ? (
          <ButtonIcon $iconPosition={iconPosition} src={icon} alt={iconAlt} />
        ): ''
      }
    </ButtonContainer>
  );

  if (as === 'link') {
    return (
      <Link to={to ? to : ''}>
        <ButtonComponent /> 
      </Link>
    );
  };

  return (
    <ButtonComponent /> 
  );
};
