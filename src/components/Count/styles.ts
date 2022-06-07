import styled, { css } from 'styled-components';
import { rem } from '../../utils/transformPxToRem';

type CountContainerProps = {
  color: string;
};

export const CountContainer = styled.div<CountContainerProps>`
  display: flex;
  align-items: center;

  strong {
    font-size: ${rem(14)};
    color: var(--blue);

    ${(props) =>
      props.color === 'purple' &&
      css`
        color: var(--purple);
      `}
  }
  p {
    background: var(--gray-400);
    padding: ${rem(2)} ${rem(10)};
    margin-left: ${rem(8)};
    border-radius: 50%;
    min-width: ${rem(25)};
    height: ${rem(25)};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${rem(12)};
    font-weight: bold;
  }
`;
