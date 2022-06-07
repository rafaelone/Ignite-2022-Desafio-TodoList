import styled from 'styled-components';
import { rem } from '../../utils/transformPxToRem';

export const TaskContainer = styled.li`
  width: 100%;
  padding: ${rem(0)} ${rem(16)};
  display: flex;
  align-items: center;
  background: var(--gray-500);
  height: ${rem(72)};
  & + li {
    margin-top: ${rem(12)};
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  color: var(--gray-100);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: ${rem(16)};
  p {
    margin-left: ${rem(15)};
    width: 100%;
  }
`;

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid var(--blue);
  border-radius: 50%;
`;

export const CheckCircle = styled(Circle)`
  border: 1px solid var(--purple-dark);
  background: var(--purple-dark);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  margin-left: ${rem(12)};
`;
