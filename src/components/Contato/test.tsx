import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Contato } from '.';

describe('<Contato />', () => {
  it('should render', () => {
    renderTheme(<Contato />);

    expect(screen.getAllByLabelText('icon')).toHaveLength(2);
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<Contato />);

    expect(container).toMatchSnapshot();
  });
});
