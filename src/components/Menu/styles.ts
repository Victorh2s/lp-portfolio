import styled, { css, DefaultTheme } from 'styled-components';

type MenuBehaviorProps = {
  Visible: boolean;
};

export const Wrapper = styled.div`

`;

const menuVisible = (Visible: MenuBehaviorProps['Visible']) => css`
  visibility: Visible;
  opacity: 1;
  overflow-y: ${Visible ? 'auto' : 'hidden'};
`;

export const MenuContainer = styled.nav<MenuBehaviorProps>`
  ${({ theme, Visible }) => css`

    position: fixed;
    display: flex;
    top: 0 ;
    right: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    -webkit-box-shadow: 0px -10px 36px -3px rgba(2,31,29,1);
    -moz-box-shadow: 0px -10px 36px -3px rgba(2,31,29,1);
    box-shadow: 0px -10px 36px -3px rgba(2,31,29,1);
    background: ${theme.colors.dark};
    transition: all 300ms ease-in-out;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      visibility: hidden;
      opacity: 0;
      ${Visible && menuVisible(Visible)};
      display: block;
      position: fixed;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
      max-width: 32rem;
      height: 100vh;
      overflow-y: auto;
      right: 0;
      border-right: 0.1rem solid ${theme.colors.green};

    }

  `}
`;

const buttonChanger = (
  Visible: MenuBehaviorProps['Visible'],
  theme: DefaultTheme,
) => css`
   right: ${Visible ? '26rem' : '1rem'};
   color: ${Visible ? theme.colors.green : theme.colors.white};
   @media ${theme.media.lteMedium} {
    left: ${Visible ? '26rem' : '1rem'};
  }
 `;

export const Button = styled.button<MenuBehaviorProps>`
  ${({ theme, Visible }) => css`

    display: none;
    z-index: 6;
    position: fixed;
    top: 2rem;
    left: 2rem;
    width: 4rem;
    height: 4rem;
    background: transparent;
    color: ${theme.colors.dark};
    border: none;
    pointer-events: ${Visible ? 'none' : 'all'};
    transition: all 300ms ease-in-out;

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${buttonChanger(Visible, theme)}

    > svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
