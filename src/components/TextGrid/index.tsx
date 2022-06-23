import * as Styled from './styles';

export type TextGridProps = {
  children: string;
  colorDark?: boolean;
};

export const TextGrid = ({ children, colorDark = false }: TextGridProps) => {
  return <Styled.Wrapper colorDark={colorDark}>{children}</Styled.Wrapper>;
};
