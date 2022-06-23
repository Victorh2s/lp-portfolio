import { Title as Heading } from '../Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`

    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.medium};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 0; 
      ${Heading} {
      font-size: ${theme.font.sizes.medium};
    }
    }

    ${Heading} {
      margin-bottom: ${theme.spacings.xlarge};
    }


  `}
`;

export const profile = styled.div`
`;

export const description = styled.div`


`;
