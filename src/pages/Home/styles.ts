import styled from 'styled-components';
import { rem } from '../../utils/transformPxToRem';

export const HomeContainer = styled.main`
  margin: 0 auto;
  max-width: 736px;
  transform: translateY(-25px);

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(8)};
  }

  ul {
    list-style: none;
    margin-top: ${rem(24)};
  }

  @media screen and (max-width: 768px) {
    padding: 0 ${rem(16)};
  }
`;

export const AddButton = styled.button`
  background: var(--blue-dark);
  padding: ${rem(16)};
  display: flex;
  align-items: center;
  border: none;
  border-radius: ${rem(8)};
  transition: 0.2s all;
  strong {
    margin-right: 8px;
    color: var(--gray-100);
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
