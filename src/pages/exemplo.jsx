import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

const Exemplo = () => {
  return (
    <Layout title="Usando componentes">
      <Cabecalho title="Next.js & React" />
      <Cabecalho title="Aprende Next na prática" />
    </Layout>
  )
}

export default Exemplo