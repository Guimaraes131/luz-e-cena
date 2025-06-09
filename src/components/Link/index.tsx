import styles from './Link.module.css'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = ({children, ...rest}: LinkProps) => {
  return (
    <a {...rest} className={styles.link}>{children}</a>
  )
}

export default Link