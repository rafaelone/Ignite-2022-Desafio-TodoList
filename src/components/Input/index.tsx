import { InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  return <InputContainer name={name} {...rest} />;
}
