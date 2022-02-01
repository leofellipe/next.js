import Navegador from '../components/Navegador'

const Inicio = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Navegador destino="/Estiloso" text="Estiloso" color="red" />
        <Navegador destino="/exemplo" text="Exemplo" color="royalblue" />
        <Navegador destino="/jsx" text="JSX" color="darkviolet" />
        <Navegador destino="/navegacao" text="Navegação #01" color="green" />
        <Navegador destino="/cliente/sp-2/123" text="Navegação #02" color="dodgerblue" />
        <Navegador destino="/estado" text="Componentes de estado" color="#8B0000" />
      </div>
    </div>
  )
}

export default Inicio