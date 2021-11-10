export default function Home() {
    // return '<h1>Home</h1>'
    // const a = 1
    // const b = 2    
    // console.log(a * b)

    // const obj = {nome:'Arlan Marreiro', idade: 27}

    const titulo = <h1>Fundamentos de Next.JS & React</h1>

    function subtitulo() {
        return <h2>Estudando os conceitos do Framework</h2>
    }
    return (
        <div>            
            {titulo}
            {subtitulo()}            
            <h2>{" Teste de Maiusculo".toUpperCase()}</h2>
            <p>
                {JSON.stringify({nome:'Arlan Marreiro', idade: 27})}
            </p>
        </div>
    )
}
