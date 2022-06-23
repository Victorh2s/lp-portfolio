import { TextGrid } from '../TextGrid';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const GridAcademic = () => {
  return (
    <Styled.Grid>
      <Heading as="h4" size="medium" colorDark={false}>
        Formação acadêmica
      </Heading>

      <Styled.Container>
        <Styled.Section>
          <Styled.Title>
            <Styled.Image src="/images/estacio.png" alt="Estácio" />
            <Heading as="h5" size="small" colorDark={false}>
              Universidade Estácio de Sá
            </Heading>
          </Styled.Title>
        </Styled.Section>
        <TextGrid colorDark={false}>
          Análise e Desenvolvimento de Sistemas
        </TextGrid>
        <TextGrid colorDark={false}>Fev de 2022 - jun de 2024</TextGrid>
      </Styled.Container>
    </Styled.Grid>
  );
};
