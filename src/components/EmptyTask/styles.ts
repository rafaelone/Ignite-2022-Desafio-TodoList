import styled from 'styled-components';
import { rem } from '../../utils/transformPxToRem';

export const EmptyTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem(244)};
  flex-direction: column;

  img {
    margin-bottom: ${rem(16)};
  }

  strong {
    font-size: ${rem(16)};
    color: var(--gray-200);
    & + strong {
      margin-top: ${rem(8)};
    }

    &:last-child {
      color: var(--gray-300);
    }
  }
`;
