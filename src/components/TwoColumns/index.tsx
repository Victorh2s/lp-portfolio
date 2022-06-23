import { TextGrid } from '../TextGrid';
import { Logo } from '../Logo';
import * as Styled from './styles';
import { TitleGlitch } from '../TitleGlitch';
import { Contato } from '../Contato';

export const TwoColumns = () => {
  return (
    <Styled.Wrapper>
      <Styled.profile>
        <Logo srcimg="https://images.unsplash.com/photo-1652859921778-d9bfa8fca10d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTc4NDYzNw&ixlib=rb-1.2.1&q=80&w=360" />
      </Styled.profile>
      <Styled.description>
        <TitleGlitch />
        <TextGrid>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          excepturi hic asperiores? Molestiae explicabo, consequatur maiores
          vero earum, mollitia magnam perferendis est molestias fugit ex quis
          natus sunt porro? Dolorem.
        </TextGrid>
        <Contato />
      </Styled.description>
    </Styled.Wrapper>
  );
};
