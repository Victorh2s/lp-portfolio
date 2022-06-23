import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';
import { GridFront } from '../GridFront';
import { GridBack } from '../GridBack';
import { GridFinal } from '../GridFinal';

export const GridImage = () => {
  return (
    <SectionBackground>
      <Styled.Wrapper>
        <Styled.Container>
          <GridFront />
        </Styled.Container>
        <Styled.Container>
          <GridBack />
        </Styled.Container>
      </Styled.Wrapper>
      <GridFinal />
    </SectionBackground>
  );
};
