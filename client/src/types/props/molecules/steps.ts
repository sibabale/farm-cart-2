import { ReactNode } from 'react';

export type FormProps = {
  children?: ReactNode
  handleFromSubmition: () => void
};