import Layout from '../components/Layout'

const Jsx = () => {

  const titulo = <h1>Jsx é um conceito central</h1>

  const subtitulo = () => {
    return (
      <h2>{'É muito legal'.toUpperCase()}</h2>
    )
  }

  return (
    <Layout title="Entendendo o JSX">
      <div>
        {titulo}
        {subtitulo()}
        <p>
          {JSON.stringify({ nome: 'Leonardo', idade: 19 })}
        </p>
      </div>
    </Layout>
  )
}

export default Jsx