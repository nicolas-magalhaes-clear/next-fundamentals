import Link from "next/link";
import styles from '../styles/Navegador.module.css'


export default function Navegador(props){

    return(
       <Link  className={styles.navegador} href={props.destino}>{props.text}</Link>
    )

}