const Jsx = () => {

  const titulo = <h1>Jsx é um conceito central</h1>

  const subtitulo = () => {
    return (
      <h2>{'É muito legal'.toUpperCase()}</h2>
    )
  }

  return (
    <div>
      {titulo}
      {subtitulo()}
      <p>
        {JSON.stringify({ nome: 'Leonardo', idade: 19 })}
      </p>
    </div>
  )
}

export default Jsx