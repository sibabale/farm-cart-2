import {ReactNode} from 'react';

import {BadgeContainer} from './badge.styles';
export interface IBadgeProps {
  text?: string
  children?: ReactNode
}

export default function Badge ({text, children}: IBadgeProps) {
  return (
    <BadgeContainer>
      {text && text}
      {children}
    </BadgeContainer>
  );
}
