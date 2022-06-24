import { TextGrid } from '../TextGrid';
import { Logo } from '../Logo';
import * as Styled from './styles';
import { Contato } from '../Contato';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { motion } from 'framer-motion';
import * as Frame from '../../Animation/animations';

export const TwoColumns = () => {
  return (
    <SectionBackground>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={Frame.VisibleTwoColumns}
      >
        <Styled.Wrapper>
          <Styled.profile>
            <Logo srcimg="https://images.unsplash.com/photo-1652859921778-d9bfa8fca10d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTc4NDYzNw&ixlib=rb-1.2.1&q=80&w=360" />
          </Styled.profile>
          <Styled.description>
            <Heading as="h2" size="big" colorDark={false}>
              Bem-vindo
            </Heading>
            <TextGrid>
              Olá! Meu nome é Victor Henrique e sou desenvolvedor Full Stack
              focado nas melhores tecnologias Web. Faço da programação a solução
              para problemas do cotidianos. Atualmente estou cursando Análise e
              Desenvolvimento de sistemas pela Estácio...
            </TextGrid>
            <Contato />
          </Styled.description>
        </Styled.Wrapper>
      </motion.div>
    </SectionBackground>
  );
};
