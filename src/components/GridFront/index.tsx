import { Heading } from '../Heading';
import * as Styled from './styles';
import { TextGrid } from '../TextGrid';
import { ReactLogo } from '@styled-icons/simple-icons';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { Storybook } from '@styled-icons/simple-icons/Storybook';
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';

export const GridFront = () => {
  return (
    <Styled.Front>
      <Heading as="h3" colorDark={false} size="big">
        Front-End
      </Heading>
      <Styled.Grid>
        <Styled.container>
          <ReactLogo aria-label="icon" />
          <TextGrid colorDark={false}>React</TextGrid>
        </Styled.container>

        <Styled.container>
          <Nextdotjs aria-label="icon" />

          <TextGrid colorDark={false}>Next.Js</TextGrid>
        </Styled.container>

        <Styled.container>
          <Storybook aria-label="icon" />
          <TextGrid colorDark={false}>Storybook</TextGrid>
        </Styled.container>

        <Styled.container>
          <Styledcomponents aria-label="icon" />
          <TextGrid colorDark={false}>Styled Components</TextGrid>
        </Styled.container>
      </Styled.Grid>
    </Styled.Front>
  );
};
