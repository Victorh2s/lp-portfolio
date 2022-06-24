import styled, { css } from 'styled-components';

export const Image = styled.img`
${({ theme }) => css`

  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  border: 0.2rem solid ${theme.colors.white};

  @media ${theme.media.lteMedium} {
    width: 10rem;
  height: 10rem;
    }
`}

`;
