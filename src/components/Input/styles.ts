import styled from 'styled-components';
import { rem } from '../../utils/transformPxToRem';

export const InputContainer = styled.input`
  padding: ${rem(16)};
  border-radius: ${rem(8)};
  width: 100%;
  background: var(--gray-500);
  border: 1px solid var(--gray-700);
  color: var(--gray-100);
  ::placeholder {
    color: var(--gray-300);
  }
`;
