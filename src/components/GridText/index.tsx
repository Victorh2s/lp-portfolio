import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GridAcademic } from '../GridAcadem';
import { GridCourses } from '../GridCourses';
import { SectionBackground } from '../SectionBackground';
import { motion, useAnimation } from 'framer-motion';
import * as Styled from './styles';
import { VisbleGridText } from '../../Animation/animations';

export const GridText = () => {
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
        variants={VisbleGridText}
        animate={controls}
        initial="hidden"
      >
        <Styled.Wrapper id="Certificações">
          <Styled.Container>
            <GridCourses />
          </Styled.Container>

          <Styled.Container>
            <GridAcademic />
          </Styled.Container>
        </Styled.Wrapper>
      </motion.div>
    </SectionBackground>
  );
};
