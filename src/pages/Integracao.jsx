
import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [codigo, setCodigo] = useState();
    const [cliente, setCliente] = useState({});

    function obterCliente(codigoBusca) {
        console.log('Chamado')
        fetch(`http://127.0.0.1:3000/api/clientes/${codigoBusca}`, {
            method: 'GET'
        })
            .then(data => data.json())
            .then(dados => {
                console.log('Dados:', dados);
                setCliente(dados)
            })
    }
    return (

        <Layout titulo="Integração com API">
            <div>
                <input type="number" onChange={(e) => setCodigo(e.target.value)}/>
                <button onClick={() => obterCliente(codigo)}>Obter cliente</button>
            </div>
            <ul>
                <li>Código {cliente.id}</li>
                <li>nome {cliente.nome}</li>
                <li>Email {cliente.email}</li>
            </ul>
        </Layout>
    )
}