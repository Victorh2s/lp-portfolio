import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import { theme } from '../../styles/theme';

describe('<Menu />', () => {
  it('should render menu mobile when button = true and close when = false', () => {
    renderTheme(<Menu />);

    const button = screen.getByLabelText('Open or close menu');
    const menu = button.nextSibling;

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menu).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    fireEvent.click(button);

    expect(menu).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(menu);

    expect(menu).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });
});
