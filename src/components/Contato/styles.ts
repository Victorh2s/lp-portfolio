import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  align-items: center;
  padding: ${theme.spacings.xlarge};

  `}
`;

export const Nav = styled.nav`
display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.div`

`;

export const Container = styled.a`
  ${({ theme }) => css`

  color:${theme.colors.white};
  padding: ${theme.spacings.small};

  >svg{
    width: 5rem;
    height: 5rem;


  }

  @media ${theme.media.lteMedium}{
    >svg{
    width: 3rem;
    height: 3rem;
  }
  }

  `}
`;
