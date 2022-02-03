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
            <Navegador texto="Navegação #02" destino="/cliente/AM/123"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="purple"/>            
            <Navegador texto="Integração" destino="/integracao_1" cor="red"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#6dd5ed"/>
            
        </div>
    )
}
