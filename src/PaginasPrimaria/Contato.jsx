import Head from '../ComponentesFixos/Head';
import Banner from '../ComponentesFixos/Banner';
import CardsSede from '../PaginasSecundaria/CardsSede';
import SessaoContatos from '../PaginasSecundaria/SessaoContatos';
/*import Redes from '../PaginasSecundaria/Redes';*/
import Footer from '../ComponentesFixos/Footer';
import bannerContato from '../images/banner.jpg';


function Contato ({nome}){
    return (
        <div>
            <Head nome={nome} /> {/* IMPLEMENTADO - porém tenho que usar o prop para pegar o nome do user E USAR A TAG LINK CORRETAMENTE*/}
            <Banner image={bannerContato}/> {/* IMPLEMENTADO - porém tenho que fazer para mudar de acordo com a página*/}
            <CardsSede/> {/* FALTA IMPLEMENTAR*/}
            <SessaoContatos/> {/*  FALTA IMPLEMENTAR*/}
             {/* <Redes/> FALTA IMPLEMENTAR*/}
            <Footer/> {/* FALTA IMPLEMENTAR*/}
        </div>
    );
}
export default Contato