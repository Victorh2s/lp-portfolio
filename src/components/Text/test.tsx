import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Text } from '.';

describe('<Text />', () => {
  it('should render text', () => {
    renderTheme(<Text htmlChildren={'<p>Oi</p>'} />);

    expect(screen.getByText('Oi')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<Text htmlChildren={'<p>Oi</p>'} />);

    expect(container).toMatchSnapshot();
  });
});
