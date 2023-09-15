import Link from 'next/link';
import styles from '../styles/Layout.module.css'

const Layout = (props) =>{


    return(
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>
            <h1>{props.titulo}</h1>
            <Link href="/" >Voltar</Link>


            </div>

            <div className={styles.cabecalho}>



            </div>

            
            {props.children}
            
        </div>
    )

}


export default Layout;