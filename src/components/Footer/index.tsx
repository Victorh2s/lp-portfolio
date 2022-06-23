import { KeyboardArrowUp } from '@styled-icons/material-outlined';
import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container href="#" aria-label="Go to top" title="Go to top">
        <KeyboardArrowUp />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
