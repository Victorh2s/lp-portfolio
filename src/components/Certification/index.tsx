import { LinkExternal } from '@styled-icons/boxicons-regular';
import * as Styled from './styles';

export type CertificationProps = {
  href: string;
};

export const Certification = ({ href }: CertificationProps) => {
  return (
    <Styled.Certification>
      <Styled.a href={href} target="_blank">
        Exibir Credencial <LinkExternal aria-label="icon" />
      </Styled.a>
    </Styled.Certification>
  );
};
