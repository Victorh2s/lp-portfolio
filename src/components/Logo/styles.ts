import styled, { css } from 'styled-components';

export const Image = styled.img`
${({ theme }) => css`

  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to right, #090213, #078a85);

  @media ${theme.media.lteMedium} {
    width: 10rem;
  height: 10rem;
    }
`}

`;
