import { Wrapper as TextGrid } from '../TextGrid/styles';
import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Certification } from '../Certification/styles';

export const Grid = styled.main`
  ${({ theme }) => css`

  @media ${theme.media.lteMedium}{
    ${Heading}{
      font-size: ${theme.font.sizes.medium};
    }


}
  `}
`;

export const Container = styled.section`
  ${({ theme }) => css`

  ${TextGrid}{
    margin-top: -0.1rem;
  }

  @media ${theme.media.lteMedium}{
    ${TextGrid}{
    font-size: 1.4rem;
  }


}

  `}
`;

export const Section = styled.div`
  ${({ theme }) => css`
  display: flex;


  @media ${theme.media.lteMedium}{
      display: block;
      align-items:center;
      ${Certification}{
        margin-top: -0.5rem;
        margin-bottom: 1rem;
        padding: 0;
      }

  }

  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`

  display: flex;
  align-items: center;
  ${Heading}{
    padding: 1rem;
    }



  @media ${theme.media.lteMedium}{
    ${Image}{
      width: 5rem;
      height: 4rem;
      padding: 0.1rem;
    }
    ${Heading}{
      font-size: 2rem;
      padding: 0;
    }

    display: inline;
  }


  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
  width: 6rem;
  height: 5rem;
  padding: 0.3rem;
  border-radius: 10%;
  background: ${theme.colors.white};

  `}
`;
