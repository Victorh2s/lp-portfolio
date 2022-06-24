import { Footer } from 'components/Footer';
import { GridImage } from 'components/GridImage';
import { GridText } from 'components/GridText';
import { TwoColumns } from 'components/TwoColumns';
import { Menu } from '../../components/Menu';

function Home() {
  return (
    <>
      <meta name="description" content="Portfólio" />
      <Menu />
      <TwoColumns />
      <GridImage key="GridImage" />
      <GridText />
      <Footer />
    </>
  );
}

export default Home;
