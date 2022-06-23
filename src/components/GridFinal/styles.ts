import styled, { css } from 'styled-components';
import { Wrapper as TextGrid } from '../TextGrid/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`

  display: flex;
  padding: ${theme.spacings.xlarge};
  align-items: center;
  justify-content: center;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to top, #078a85, #090213);


  @media ${theme.media.lteMedium}{
      display: block;
      align-items: center;

      ${Image}{
        width: 7rem;
        height: 7rem;


      }
  }
  `}
`;

export const container = styled.div`
  ${({ theme }) => css`
  padding: ${theme.spacings.xlarge};
  text-align: center;
  justify-content: center;

  ${TextGrid}{
  margin-bottom: -0.1rem;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to bottom, #090213, #078a85);
}

>svg{
  color:${theme.colors.white};
  width:10rem;
  height:10rem;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to bottom, #090213, #078a85);
  transition: all 200ms ease-in-out;
  padding: ${theme.spacings.small};
  cursor: pointer;

  &:hover{
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.4rem;
  border-image-source: linear-gradient(to top, #090213, #078a85);
  }
}

@media ${theme.media.lteSmall}{
    ${TextGrid}{
    border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.1rem;
  border-image-source: linear-gradient(to left, #090213, #078a85);
}
  }


  `}
`;

export const Image = styled.img`
  width:10rem;
  height:10rem;
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.2rem;
  border-image-source: linear-gradient(to bottom, #090213, #078a85);
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover{
  border: 0.1rem solid;
  border-image-slice: 1;
  border-width: 0.5rem;
  border-image-source: linear-gradient(to top, #090213, #078a85);
  }
`;
