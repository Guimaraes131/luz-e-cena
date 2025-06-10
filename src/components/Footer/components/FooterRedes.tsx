import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6"
import Link from "../../Link"
import styles from "../Footer.module.css"

const FooterRedes = () => {
  return (
    <div className={styles.redes}>
      <h4 className={styles.titulo}>Siga nossas redes:</h4>

      <div className={styles.icones}>
        <Link>
          <FaWhatsapp className={styles.icone}/>
        </Link>
        <Link >
          <FaInstagram className={styles.icone}/>
        </Link>
        <Link >
          <FaTiktok className={styles.icone}/>
        </Link>
      </div>
    </div>
  )
}

export default FooterRedes