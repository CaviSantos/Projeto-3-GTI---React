import React from 'react';
import Footer from "../ComponentesFixos/Footer";
import Banner from "../ComponentesFixos/Banner";
import Head from "../ComponentesFixos/Head";
import Main from '../PaginasSecundaria/Main';
import Slide from '../PaginasSecundaria/Slide';
import Formulario from '../ComponentesFixos/Formulario';

function Home({ nome, onNomeChange }) {
  return (
    <div>
      <Formulario onNomeChange={onNomeChange} />
      <Head nome={nome} />
      <Banner />
      <Main />
      <Slide />
      <Footer />
      
    </div>
  );
}

export default Home;
