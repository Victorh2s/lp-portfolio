import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render footer', () => {
    renderTheme(<Footer />);

    expect(screen.getByLabelText(/Go to top/i)).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
