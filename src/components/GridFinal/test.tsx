import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridFinal } from '.';

describe('<GridFinal />', () => {
  it('should render the components', () => {
    renderTheme(<GridFinal />);

    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Linux Ubuntu/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText('icon')).toHaveLength(3);
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<GridFinal />);

    expect(container).toMatchSnapshot();
  });
});
