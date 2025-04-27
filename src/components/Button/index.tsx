import styles from './Button.module.css'
import classNames from 'classnames'


type ButtonProps = {
    variant: "default" | "icon"
} & React.ButtonHTMLAttributes<HTMLButtonElement>


const Button = ({children, variant='default', ...rest}: ButtonProps) => {

    const classMap = {
        default: styles.default,
        icon: styles.icon
    }

    return (
        <button className={classNames(styles.botao, classMap[variant])} {...rest}>
            {children}
        </button>
    )
}

export default Button;