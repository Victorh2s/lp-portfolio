import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.dark};
    border-top: 0.1rem solid ${theme.colors.green};
    align-items: center;
    justify-content: center;
    padding: 1rem;
  `}
`;

export const Container = styled.a`
    border: 0.1rem solid;
    border-radius: 50rem;
    width: 4rem;
    height: 4rem;
    z-index: 6;
`;
