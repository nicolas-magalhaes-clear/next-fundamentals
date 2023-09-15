import React from "react"
import Navegador from "../components/Navegador"
import styles from '../styles/index.module.css'

export default function Inicio() {



    return (
        <div>
            <div className={styles.displayMenu}>

                <Navegador text="Estiloso" destino="/Estiloso"></Navegador>
                <Navegador text="Exemplo" destino="/exemplo"></Navegador>
                <Navegador text="JSX" destino="/jsx"></Navegador>
                <Navegador text="Navegacao #01" destino="/navegacao/"></Navegador>
                <Navegador text="Navegação #02" destino="/cliente/sp0011/123"></Navegador>
                <Navegador text="Estado de componentes" destino="/Estado"></Navegador>

            </div>
            <main className={styles.mainArea}>


            </main>
        </div>

    )
}