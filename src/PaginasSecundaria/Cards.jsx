import React from 'react';
import dataServicos from '../AquivosJson/Dados.json'; // Importar o JSON com os dados dos serviços

function Cards() {
    return (
        <div className="Slider h-auto border-b-2 pt-6 pb-6 border-yellow-300 bg-black flex justify-center flex-col">
            <p className="text-yellow-300 font-bold text-5xl text-center pb-10">Nossos Serviços</p>

            <div className="flex flex-wrap gap-16 justify-center px-7">
                {dataServicos.servicos.map(servico => (
                    <div key={servico.id} className="flex flex-col justify-center bg-gray-900 w-60 items-center text-center p-5 rounded-lg border-white border-2">
                        <p className="text-yellow-300 font-bold text-2xl pb-4 ">{servico.assunto}</p>
                        <div className="text-yellow-300 border-2 border-purple-500 h-48 w-48 rounded-lg flex items-center justify-center">
                            <p className='text-yellow-300 text-center'>{servico.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
