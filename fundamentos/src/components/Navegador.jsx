import Link from "next/dist/client/link"
import styles from '../styles/Navegador.module.css'

export default function Navegador(props){
    return (
        <Link href={props.destino}>
            <div className={styles.Navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue',
                cursor: "pointer"
            }}>
            {props.texto}
            </div>
        </Link>
    )
}