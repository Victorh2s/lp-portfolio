import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render img', () => {
    renderTheme(<Logo srcimg="image.png" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image.png');
  });
});
