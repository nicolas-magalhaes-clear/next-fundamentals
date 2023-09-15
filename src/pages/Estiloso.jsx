import Layout from '../components/Layout'
import styles from '../styles/Estiloso.module.css'

const Estiloso = (props) => {
    return (
        <Layout titulo={props.text}>
            <div className={styles.roxo}>

                <h1>Estilo usando css modules</h1>

            </div>
        </Layout>

    )
}


export default Estiloso