import * as Styled from './styles';

export type LogoProps = {
  srcimg: string;
};

export const Logo = ({ srcimg }: LogoProps) => {
  return <Styled.Image src={srcimg} />;
};
