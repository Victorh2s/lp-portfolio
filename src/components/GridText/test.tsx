import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText />);

    expect(screen.getAllByLabelText('icon')).toHaveLength(3);
    expect(screen.getAllByRole('heading')).toHaveLength(6);
    expect(container.querySelectorAll('p')).toHaveLength(5);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
