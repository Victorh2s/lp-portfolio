import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';
import { GridFront } from '../GridFront';
import { GridBack } from '../GridBack';
import { GridFinal } from '../GridFinal';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { VisbleGridImage } from '../../Animation/animations';
import { useInView } from 'react-intersection-observer';

export const GridImage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <SectionBackground>
      <motion.div
        ref={ref}
        variants={VisbleGridImage}
        animate={controls}
        initial="hidden"
      >
        <Styled.Wrapper id="Skills">
          <Styled.Container>
            <GridFront />
          </Styled.Container>
          <Styled.Container>
            <GridBack />
          </Styled.Container>
        </Styled.Wrapper>
        <GridFinal />
      </motion.div>
    </SectionBackground>
  );
};
