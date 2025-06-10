import styles from "../Footer.module.css"

const FooterInstitucional = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>

      <span className={styles.ancora}>
        <a>Sobre nós</a>
      </span>
      <span className={styles.ancora}>
        <a>Para empresas</a>
      </span>
      <span className={styles.ancora}>
        <a>Club fidelidade</a>
      </span>
    </div>
  )
}

export default FooterInstitucional