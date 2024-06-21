function Main() {
    return (
        <div className="ConteinerMain h-auto bg-black border-b-2 border-yellow-300 p-4">
            <div>
                <h1 className="text-yellow-300 pt-6 font-bold text-5xl text-center">Nossas Conquistas</h1>
            </div>
            <div className="ConteinerConquistas flex flex-row justify-center gap-10 pt-14 flex-wrap">
                <div className=" bg-gray-900 border-2 border-purple-500 p-4 h-52 w-64 rounded-xl">
                    <h2 className="text-yellow-300 pt-2 font-bold text-3xl pb-2 text-center">Receita</h2>
                    <p className="tracking-wide text-yellow-300 text-xs text-center">A empresa atingiu um marco significativo ao aumentar sua receita anual em 150% nos últimos cinco anos, refletindo seu crescimento constante e a expansão bem-sucedida de suas operações.</p>
                </div>
                <div className=" bg-gray-900 border-2 border-purple-500 p-4 h-52 w-64 rounded-xl">
                    <h2 className="text-yellow-300 pt-2 font-bold text-3xl pb-2 text-center ">Expansão</h2>
                    <p className=" tracking-wide text-yellow-300 text-xs text-center">Com filiais em mais de 20 países, a empresa estabeleceu uma presença global, permitindo alcançar novos mercados e diversificar suas fontes de receita.</p>
                </div>
                <div className=" bg-gray-900 border-2 border-purple-500 p-4 h-52 w-64 rounded-xl">
                    <h2 className="text-yellow-300 pt-2 font-bold text-3xl pb-2 text-center">Inovação</h2>
                    <p className="tracking-wide text-yellow-300 text-xs text-center">Lançou um novo produto revolucionário que foi adotado por mais de 10 milhões de usuários em seu primeiro ano de lançamento, destacando-se como líder de mercado em inovação tecnológica.</p>
                </div>
                <div className=" bg-gray-900 border-2 border-purple-500 p-4 h-52 w-64 rounded-xl">
                    <h2 className="text-yellow-300 pt-2 font-bold text-3xl pb-2 text-center">Sociedade</h2>
                    <p className="tracking-wide text-yellow-300 text-xs text-center">Conduziu projetos de responsabilidade social corporativa, impactando positivamente mais de 100 comunidades locais e sendo reconhecida com prêmios de impacto social.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
