import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClienteProCodigo(){

    const router = useRouter();
    return(
        <Layout titulo="Navegação dinâmica">
            <span>Código = {router.query.Codigo}</span>
            <span>Filial = {router.query.filial}</span>
        </Layout>
    )
}