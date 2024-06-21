import React from 'react';
import Maotung from '../images/mao.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

function Footer() {
    return (
        <div className="ConteinerFooter bg-black px-4 py-6">
            <div className="">
                <h1 className="text-yellow-300 pt-6 font-bold text-4xl sm:text-5xl text-center">Chama no ZAP!</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-36 gap-8 mt-6">
                <div>
                    <ul className="pt-5 space-y-5">
                        <div className="flex flex-row gap-5 items-center">
                            <FaMapMarkerAlt className='text-purple-500 text-xl sm:text-2xl'/>
                            <li className="text-yellow-300 text-xl sm:text-2xl">Rua Lorem Ipsum, 123</li>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <FaPhone className='text-purple-500 text-xl sm:text-2xl' />
                            <li className="text-yellow-300 text-xl sm:text-2xl">85 9 8579-8579</li>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <MdAttachEmail className='text-purple-500 text-xl sm:text-2xl' />
                            <li className="text-yellow-300 text-xl sm:text-2xl">lorem.ipsum123@gmail.com</li>
                        </div>
                    </ul>
                </div>
                <div className="pt-6 relative z-10">
                    <div className="bg-cover bg-center w-48 h-48 sm:w-64 sm:h-64 border-2 border-purple-500 rounded-xl" style={{ backgroundImage: `url(${Maotung})` }}></div>
                </div>
            </div>
            <div className="h-16 mt-5 border-t-2 border-yellow-300">
                <p className="text-yellow-300 text-center text-sm sm:text-base mt-5">Lorem Ipsum - Todos os direitos reservados</p>
            </div>
        </div>
    );
}

export default Footer;
