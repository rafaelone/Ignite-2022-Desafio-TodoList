import styled from 'styled-components';
import { rem } from '../../utils/transformPxToRem';

export const TaskCountContainer = styled.div`
  margin-top: ${rem(64)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${rem(25)};
  border-bottom: 1px solid #333333;
`;
