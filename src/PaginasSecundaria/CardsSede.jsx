import molchat from '../images/dolmazin.jpg';
import pyonyang from '../images/ryugyong.jpg';
import cuba from '../images/cuba.webp';
import china from '../images/china.jpg';

function CardsSede() {
    return (
        <div className="Slider h-auto border-b-2 pt-6 pb-6 border-yellow-300 bg-black flex flex-col items-center">
            <p className="tracking-wide text-yellow-300 font-bold text-3xl sm:text-4xl md:text-5xl text-center pb-10">Nossas Filiais</p>
            <div className="flex flex-wrap gap-10 justify-center">
                <div className="text-center flex flex-col items-center">
                    <div className="border-2 border-purple-500 h-40 w-32 sm:h-48 sm:w-36 md:h-60 md:w-48 rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${molchat})` }}></div>
                    <p className="tracking-wide text-yellow-300 font-bold text-md sm:text-lg md:text-xl pb-4">Caucaia, Jurema</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div className="border-2 border-purple-500 h-40 w-32 sm:h-48 sm:w-36 md:h-60 md:w-48 rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${pyonyang})` }}></div>
                    <p className="tracking-wide text-yellow-300 font-bold text-md sm:text-lg md:text-xl pb-4">Acre, Rio Branco</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div className="border-2 border-purple-500 h-40 w-32 sm:h-48 sm:w-36 md:h-60 md:w-48 rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${cuba})` }}></div>
                    <p className="tracking-wide text-yellow-300 font-bold text-md sm:text-lg md:text-xl pb-4">Itália, Oitão Preto</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div className="border-2 border-purple-500 h-40 w-32 sm:h-48 sm:w-36 md:h-60 md:w-48 rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${china})` }}></div>
                    <p className="tracking-wide text-yellow-300 font-bold text-md sm:text-lg md:text-xl pb-4">Cuba, Sallahmaleiko</p>
                </div>
            </div>
        </div>
    );
}

export default CardsSede;
