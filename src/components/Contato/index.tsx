import * as Styled from './styles';
import { Linkedin } from '@styled-icons/simple-icons';
import { Github } from '@styled-icons/simple-icons';

export const Contato = () => {
  return (
    <Styled.Wrapper>
      <Styled.Nav>
        <Styled.Icons>
          <Styled.Container
            href="https://www.linkedin.com/in/victorhdss/"
            target="_blank"
          >
            <Linkedin aria-label="icon" />
          </Styled.Container>
          <Styled.Container href="https://github.com/Victorh2s" target="_blank">
            <Github aria-label="icon" />
          </Styled.Container>
        </Styled.Icons>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};
