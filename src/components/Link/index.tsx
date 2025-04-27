import styles from "./Link.module.css"

const Link = ({children, ...rest}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <div>
            <a className={styles.link} {...rest}>{children}</a>
        </div>
    )
}

export default Link;