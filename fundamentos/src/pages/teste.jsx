import Layout from "../components/Layout"
export default function Teste(){

    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"Teste Subtitulo UpperCase".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({nome: 'Arlan Marreiro', idade: 27})}
                </p>
            </div>
        </Layout>
    )
    
}