import Link from 'next/link'
import styles from '../styles/Navegador.module.sass'


const Navegador = (props) => {
  console.log(props)
  return (
    <div>
      <Link href={props.destino}>
        <div className={styles.navegador} style={{ backgroundColor: props.color ?? 'backgroundColor: dodgerblue' }}>
          {props.text}
        </div>
      </Link>
    </div>
  )
}

export default Navegador