import styled, { css } from 'styled-components';

export const Certification = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-decoration: none;
    font-family: ${theme.font.family.main};
    margin-top: 0.6rem;


  @media ${theme.media.lteMedium}{
    > a{
      font-size: 1.4rem;
    }
  }

  `}
`;

export const a = styled.a`
  ${({ theme }) => css`

    >svg {
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.green};
  }



  `}
`;
