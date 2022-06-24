import { Title as Heading } from '../Heading/styles';
import { Wrapper as TextGrid } from '../TextGrid/styles';
import styled, { css } from 'styled-components';

export const Front = styled.div`
  ${({ theme }) => css`
  padding: ${theme.spacings.xlarge};

${Heading}{
    text-align: center;
}

border: 0.1rem solid;
border-image-slice: 1;
border-width: 0.1rem;
border-image-source: linear-gradient(to right, #090213, #078a85);

@media ${theme.media.lteMedium}{
padding: ${theme.spacings.small};
}

  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: ${theme.spacings.small};



    @media ${theme.media.lteMedium}{
      display: block;
      ${TextGrid}{
        font-size: ${theme.font.sizes.small};
      }
      ${Image}{
        width: 7rem;
        height: 7rem;
      }
  }
  `}
`;

export const container = styled.div`
  ${({ theme }) => css`
text-align: center;
justify-content: center;

>svg{
  color:${theme.colors.white};
  width:10rem;
  height:10rem;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to left, #090213, #078a85);
  transition: all 200ms ease-in-out;
  padding: ${theme.spacings.small};
  cursor: pointer;

  &:hover{
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.4rem;
  border-image-source: linear-gradient(to left, #090213, #078a85);
  }
}

${TextGrid}{
  margin-top: 0.8rem;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to right, #090213, #078a85);
}
`}
`;

export const Image = styled.img`
  width:10rem;
  height:10rem;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to left, #090213, #078a85);
  transition: all 200ms ease-in-out;

  cursor: pointer;
  &:hover{
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.5rem;
  border-image-source: linear-gradient(to left, #090213, #078a85);
  }
`;
