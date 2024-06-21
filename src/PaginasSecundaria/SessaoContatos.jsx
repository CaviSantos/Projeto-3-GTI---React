import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function SessaoContatos() {
    return (
        <div className="Slider h-auto border-b-2 pt-6 pb-0 border-yellow-300 bg-black flex flex-col items-center">
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-60 w-full px-4">
                <p className="pt-5 text-yellow-300 font-bold text-3xl sm:text-4xl lg:text-5xl lg:pt-12 text-center lg:text-left">
                    Mande<br /> sua <br /> Mensagem
                </p>
                <div className=" flex justify-center">
                    <div className="flex flex-col pb-5 w-full max-w-lg lg:w-96">
                        <div className="bg-gray-900 p-5 h-full border-2 rounded-xl border-purple-500 flex flex-col gap-2">
                            <input className="border-2 border-yellow-300 rounded-xl p-2" type="text" placeholder="Nome" />
                            <input className="border-2 border-yellow-300 rounded-xl p-2" type="text" placeholder="E-mail" />
                            <textarea className="border-2 border-yellow-300 rounded-xl h-32 w-full p-2 resize-none" placeholder="Como podemos lhe ajudar ?" />
                            <div className="h-10 w-full flex justify-center">
                                <button className="rounded-xl bg-gray-900 h-10 w-20 text-yellow-500 border-2 border-yellow-300" type="submit">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="h-auto border-t-2 pt-6 pb-6 border-yellow-300 flex flex-col items-center w-full">
                <p className="text-yellow-300 font-bold text-2xl sm:text-3xl pt-1 text-center">Siga nossas redes sociais</p>
                <div className="flex gap-5 pt-4">
                    <FaFacebookSquare className="text-purple-500 text-4xl sm:text-5xl hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                    <FaSquareInstagram className="text-purple-500 text-4xl sm:text-5xl hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                    <FaYoutube className="text-purple-500 text-4xl sm:text-5xl hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                    <FaLinkedin className="text-purple-500 text-4xl sm:text-5xl hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default SessaoContatos;
