import React, { useState, useEffect } from 'react';

function Formulario(props) {
    const [valorNome, setNomeInput] = useState('');
    const [formularioVisivel, setFormularioVisivel] = useState(true);

    useEffect(() => {
        const isFormularioEnviado = localStorage.getItem('formularioEnviado');
        if (!isFormularioEnviado && isFormularioEnviado === true) {
            setFormularioVisivel(false);
        }
    }, []);

    const alteraNome = (event) => {
        const novoNome = event.target.value;
        setNomeInput(novoNome);
    };

    const enviarForm = (event) => {
        event.preventDefault();
        props.onNomeChange(valorNome);
        setFormularioVisivel(false);
        localStorage.setItem('formularioEnviado', 'true');
    };

    if (formularioVisivel === false) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-gray-900 p-4 rounded-md shadow-md border-2 border-purple-600">
                <form className="space-y-4" onSubmit={enviarForm}>
                    <label className="block text-sm font-medium text-yellow-400" htmlFor="User">Bem-Vindo!</label>
                    <input
                        type="text"
                        value={valorNome}
                        onChange={alteraNome}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Digite seu nome"
                        required
                    />
                    <button
                        type="submit"
                        className="inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Formulario;
