import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridFront } from '.';

describe('<GridFront />', () => {
  it('should render the components', () => {
    renderTheme(<GridFront />);

    expect(screen.getByText(/Front-End/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText('icon')).toHaveLength(4);
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<GridFront />);

    expect(container).toMatchSnapshot();
  });
});
