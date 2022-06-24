import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';

describe('<GridImage />', () => {
  it('should render all components', () => {
    const { container } = renderTheme(<GridImage />);

    expect(screen.getAllByLabelText('icon')).toHaveLength(11);
    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(container.querySelectorAll('p')).toHaveLength(11);

    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Node/i)).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<GridImage />);

    expect(container).toMatchSnapshot();
  });
});
