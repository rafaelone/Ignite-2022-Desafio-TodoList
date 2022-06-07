import { HeaderContainer } from './styles';

import LogoImg from '../../assets/images/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="ToDo" />
    </HeaderContainer>
  );
}
