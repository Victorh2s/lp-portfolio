import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`

  display: grid;

  grid-template-columns: 2fr 2fr;
  align-items: stretch;
  justify-content: center;
  @media ${theme.media.lteMedium}{
      display: block;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
  }

  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`

  padding: ${theme.spacings.large};
  `}
`;
