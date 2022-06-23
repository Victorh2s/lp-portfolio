import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridAcademic } from '.';

describe('<GridAcademic />', () => {
  it('should render the components', () => {
    renderTheme(<GridAcademic />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Formação acadêmica' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Análise e Desenvolvimento de Sistemas/i),
    ).toBeInTheDocument();
  });
});
