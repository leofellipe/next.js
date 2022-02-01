import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

const ClientePorCodigo = () => {
  const Router = useRouter()
  return (
    <Layout title="Navegação Dinâmica">
      <div>Código = {Router.query.codigo}</div>
      <div>Filial = {Router.query.filial}</div>
    </Layout>
  )
}

export default ClientePorCodigo