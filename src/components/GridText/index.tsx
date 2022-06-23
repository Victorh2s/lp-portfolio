import { GridAcademic } from '../GridAcadem';
import { GridCourses } from '../GridCourses';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const GridText = () => {
  return (
    <SectionBackground>
      <Styled.Wrapper>
        <Styled.Container>
          <GridCourses />
        </Styled.Container>

        <Styled.Container>
          <GridAcademic />
        </Styled.Container>
      </Styled.Wrapper>
    </SectionBackground>
  );
};
