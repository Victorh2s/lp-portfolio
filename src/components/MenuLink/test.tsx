import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink, MenuLinkProps } from '.';

const props: MenuLinkProps = {
  children: 'MenuLink',
  link: '#',
  newTab: false,
};

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink {...props} />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toBeInTheDocument();
  });

  it('should render a internal link', () => {
    renderTheme(<MenuLink link="/localhost" {...props} />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should open in new tab', () => {
    renderTheme(<MenuLink link="/localhost" newTab={true} {...props} />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render href in the document', () => {
    renderTheme(<MenuLink link="/localhost" newTab={true} {...props} />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'href',
      '#',
    );
  });

  it('should render href in the document with newTab f', () => {
    renderTheme(<MenuLink link="/localhost" newTab={false} {...props} />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'href',
      '#',
    );
  });

  it('should render children', () => {
    renderTheme(<MenuLink {...props}>Example</MenuLink>);

    expect(screen.getByText(/Example/i)).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<MenuLink {...props} />);

    expect(container).toMatchSnapshot();
  });
});
