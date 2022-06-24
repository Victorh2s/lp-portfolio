import Head from 'next/head';
import Home from 'templates/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Portfólio-VictorH</title>
        <meta name="Portfólio" content="Victor" />
      </Head>
      <Home />
    </>
  );
}
