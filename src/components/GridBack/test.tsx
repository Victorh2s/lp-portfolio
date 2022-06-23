import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridBack } from '.';

describe('<GridBack />', () => {
  it('should render the components', () => {
    renderTheme(<GridBack />);

    expect(screen.getByText(/Back-End/i)).toBeInTheDocument();
    expect(screen.getByText(/Node.Js/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText('icon')).toHaveLength(4);
  });
});
