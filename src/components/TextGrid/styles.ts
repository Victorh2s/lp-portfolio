import styled, { css } from 'styled-components';
import { TextGridProps } from '.';

export const Wrapper = styled.p<TextGridProps>`
  ${({ theme, colorDark }) => css`

  color: ${colorDark ? theme.colors.dark : theme.colors.white};
  font-size: ${theme.font.sizes.small};
  font-family:${theme.font.family.main};
  padding: 0;

  `}
`;
