import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TwoColumns } from '.';

describe('<TwoColumns />', () => {
  it('should render the components', () => {
    renderTheme(<TwoColumns />);

    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.getByRole('heading', { name: 'Bem-vindo' }));
  });
});
