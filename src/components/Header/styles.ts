import styled from 'styled-components';
import { rem } from '../../utils/transformPxToRem';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-700);
  height: ${rem(200)};
`;
