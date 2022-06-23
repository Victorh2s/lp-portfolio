import { TextGrid } from '../TextGrid';
import * as Styled from './styles';
import { Javascript } from '@styled-icons/simple-icons';
import { Typescript } from '@styled-icons/simple-icons';
import { Linux } from '@styled-icons/simple-icons';

export const GridFinal = () => {
  return (
    <Styled.Wrapper>
      <Styled.container>
        <Javascript aria-label="icon" />
        <TextGrid colorDark={false}>JavaScript</TextGrid>
      </Styled.container>

      <Styled.container>
        <Typescript aria-label="icon" />
        <TextGrid colorDark={false}>TypeScript</TextGrid>
      </Styled.container>

      <Styled.container>
        <Linux aria-label="icon" />
        <TextGrid colorDark={false}>Linux Ubuntu</TextGrid>
      </Styled.container>
    </Styled.Wrapper>
  );
};
