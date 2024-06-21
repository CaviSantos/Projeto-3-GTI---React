import React from 'react';
import Head from '../ComponentesFixos/Head';
import Banner from '../ComponentesFixos/Banner';
import Footer from '../ComponentesFixos/Footer';
import Cards from '../PaginasSecundaria/Cards';

import sobreBannerImage from '../images/backcground-form.webp';

function Sobre({ nome }) {
  return (
    <div>
      <Head nome={nome} />
      <Banner image={sobreBannerImage} />
      <Cards />
      <Footer />
    </div>
  );
}

export default Sobre;
