import { Heading } from '../Heading';
import * as Styled from './styles';
import { TextGrid } from '../TextGrid';
import { Nodedotjs } from '@styled-icons/simple-icons';
import { Express } from '@styled-icons/simple-icons';
import { Mysql } from '@styled-icons/simple-icons';
import { Mongodb } from '@styled-icons/simple-icons';

export const GridBack = () => {
  return (
    <Styled.Front>
      <Heading as="h3" colorDark={false} size="big">
        Back-End
      </Heading>
      <Styled.Grid>
        <Styled.container>
          <Nodedotjs aria-label="icon" />
          <TextGrid colorDark={false}>Node.Js</TextGrid>
        </Styled.container>

        <Styled.container>
          <Express aria-label="icon" />

          <TextGrid colorDark={false}>Express.Js</TextGrid>
        </Styled.container>

        <Styled.container>
          <Mysql aria-label="icon" />
          <TextGrid colorDark={false}>MySQL</TextGrid>
        </Styled.container>

        <Styled.container>
          <Mongodb aria-label="icon" />
          <TextGrid colorDark={false}>MongoDB</TextGrid>
        </Styled.container>
      </Styled.Grid>
    </Styled.Front>
  );
};
