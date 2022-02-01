import Layout from '../components/Layout'
import { useState } from 'react'

const Estado = () => {
  const [numero, setNumero] = useState(0)

  const Incrementar = () => {
    setNumero(numero + 1)
  }

  return (
    <Layout title="Testando componentes de estado">
      <>{numero}</>
      <button onClick={Incrementar}>Clique aqui</button>
    </Layout>
  )
}

export default Estado