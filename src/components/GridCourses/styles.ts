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
  border-bottom: 0.1rem solid ${theme.colors.green};

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

  >svg {
    width: 5rem;
    height: 5rem;
    color: ${theme.colors.white};
  }

  @media ${theme.media.lteMedium}{
    ${Heading}{
      font-size: 2rem;
    }

}


  `}
`;
