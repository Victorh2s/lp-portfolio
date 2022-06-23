import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.main};
    padding: ${theme.spacings.small};
    color: ${theme.colors.white};
    position: relative;
    &:hover{
      color: ${theme.colors.mediumGray};
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0%;
      width: 0;
      height: 0.2rem;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,138,133,1) 100%);
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }

  `}
`;
