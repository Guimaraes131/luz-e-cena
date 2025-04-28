import FooterInfo from "./FooterInfo"
import FooterLogo from "./FooterLogo"
import styles from './Footer.module.css'
import FooterInstitucional from "./FooterInstitucional"
import FooterRedes from "./FooterRedes"
import FooterDevelopedBy from "./FooterDevelopedBy"

const Footer = () => {
    return (
        <>
            <footer className={styles.rodape}>
                <div className={styles.rodape_informacoes}>
                    <FooterLogo/>
                    <FooterInfo/>
                    <FooterInstitucional/>
                    <FooterRedes/>
                </div>
            </footer>
            <FooterDevelopedBy/>
        </>
    )
}

export default Footer