import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Certification, CertificationProps } from '.';

const props: CertificationProps = {
  href: 'any',
};

describe('<Certification />', () => {
  it('should render the components', () => {
    renderTheme(<Certification {...props} />);

    expect(screen.getByLabelText('icon')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Exibir Credencial' }),
    ).toBeInTheDocument();
  });
});
