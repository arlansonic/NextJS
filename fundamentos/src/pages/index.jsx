import Link from 'next/link'
import Navegador from '../components/Navegador'
export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh' 
        }}>
            <Navegador texto="Estilo" destino="/estilo"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#5b00d1"/>
            <Navegador texto="Teste" destino="/teste" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
        </div>
    )
}
