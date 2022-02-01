import Link from 'next/link'
import styles from '../styles/Layout.module.sass'

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h1>{props.title ?? 'teste'}</h1>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout