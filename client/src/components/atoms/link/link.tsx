import { ReactNode } from 'react'
import { Anchor } from "./link.styles";


type LinkProps = {
  to: string,
  color?: string,
  onClick?: () => void,
  children: ReactNode;
}

export const Link = ({to, color, children}: LinkProps) => {
  return(
    <Anchor href={to} color={color}>
      {children}
    </Anchor>
  )
}

export default Link