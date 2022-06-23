import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridCourses } from '.';

describe('<GridCourses />', () => {
  it('should render the components', () => {
    renderTheme(<GridCourses />);

    expect(screen.getAllByLabelText('udemy')).toHaveLength(3);
    expect(
      screen.getByRole('heading', { name: 'Licenças e certificados' }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Curso de JavaScript e TypeScript/i),
    ).toBeInTheDocument();
  });
});
