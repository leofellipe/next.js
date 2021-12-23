import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

const Estiloso = () => {
  return (
    <div className={styles.roxo}>
      <h1>Estilo usando CSS Módulos</h1>
      <Link href="/">Voltar</Link>
    </div>
  )
}

export default Estiloso