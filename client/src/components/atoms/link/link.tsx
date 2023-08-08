import { ReactNode } from 'react'
import { Anchor } from "./link.styles";


type LinkProps = {
  to: string,
  color?: string,
  onClick?: () => void,
  children: ReactNode;
  className?: string,
}

export const Link = ({to, color, className, children}: LinkProps) => {
  return(
    <Anchor href={to} color={color} className={className}>
      {children}
    </Anchor>
  )
}

export default Link