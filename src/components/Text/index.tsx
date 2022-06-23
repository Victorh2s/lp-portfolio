import * as Styled from './styles';

export type TextProps = {
  htmlChildren: string;
};

export const Text = ({ htmlChildren }: TextProps) => {
  return (
    <Styled.Wrapper
      dangerouslySetInnerHTML={{ __html: htmlChildren }}
    ></Styled.Wrapper>
  );
};
