import { TextGrid } from '../TextGrid';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { Udemy } from '@styled-icons/simple-icons/Udemy';
import { Certification } from '../Certification';

export const GridCourses = () => {
  return (
    <Styled.Grid>
      <Heading as="h4" size="medium" colorDark={false}>
        Licenças e certificados
      </Heading>
      <Styled.Container>
        <Styled.Section>
          <Styled.Title>
            <Udemy aria-label="udemy" />
            <Heading as="h5" size="small" colorDark={false}>
              Udemy
            </Heading>
          </Styled.Title>
          <Certification href="https://www.udemy.com/certificate/UC-fcc76692-e6f8-4c7a-a71b-7e36dce27413/" />
        </Styled.Section>
        <TextGrid colorDark={false}>Curso de JavaScript e TypeScript.</TextGrid>
      </Styled.Container>

      <Styled.Container>
        <Styled.Section>
          <Styled.Title>
            <Udemy aria-label="udemy" />
            <Heading as="h5" size="small" colorDark={false}>
              Udemy
            </Heading>
          </Styled.Title>
          <Certification href="https://www.udemy.com/certificate/UC-fcc76692-e6f8-4c7a-a71b-7e36dce27413/" />
        </Styled.Section>
        <TextGrid colorDark={false}>Testando aqui</TextGrid>
      </Styled.Container>

      <Styled.Container>
        <Styled.Section>
          <Styled.Title>
            <Udemy aria-label="udemy" />
            <Heading as="h5" size="small" colorDark={false}>
              Udemy
            </Heading>
          </Styled.Title>
          <Certification href="https://www.udemy.com/certificate/UC-fcc76692-e6f8-4c7a-a71b-7e36dce27413/" />
        </Styled.Section>
        <TextGrid colorDark={false}>Testando aqui</TextGrid>
      </Styled.Container>
    </Styled.Grid>
  );
};
