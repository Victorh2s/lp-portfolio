import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { MenuLink } from '../MenuLink';
import { useState } from 'react';
import * as Styled from './styles';

export const Menu = () => {
  const [Visible, SetVisible] = useState(false);

  const handleChangeMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    SetVisible((e) => !e);
  };
  return (
    <>
      <Styled.Button
        Visible={Visible}
        onClick={handleChangeMenu}
        title="Open or close menu"
        aria-label="Open or close menu"
      >
        {Visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>

      <Styled.MenuContainer
        Visible={Visible}
        onClick={() => SetVisible(false)}
        aria-hidden={!SetVisible}
      >
        <MenuLink link="#" newTab={false}>
          Sobre
        </MenuLink>
        <MenuLink link="#Skills" newTab={false}>
          Skills
        </MenuLink>
        <MenuLink link="#Certificações" newTab={false}>
          Certificações
        </MenuLink>
      </Styled.MenuContainer>
    </>
  );
};
