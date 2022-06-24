import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextGrid, TextGridProps } from '.';
import { theme } from '../../styles/theme';

const props: TextGridProps = {
  children: 'testando',
};

describe('<TextGrid />', () => {
  it('should render TextGrid in the document', () => {
    renderTheme(<TextGrid {...props} />);

    expect(screen.getByText('testando')).toBeInTheDocument();
  });

  it('should render TextGrid with ColorDark false', () => {
    renderTheme(<TextGrid colorDark={false} {...props} />);

    expect(screen.getByText('testando')).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render TextGrid with ColorDark true', () => {
    renderTheme(<TextGrid colorDark={true} {...props} />);

    expect(screen.getByText('testando')).toHaveStyle({
      color: theme.colors.dark,
    });
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<TextGrid {...props} />);

    expect(container).toMatchSnapshot();
  });
});
