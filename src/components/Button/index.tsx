import styles from './Button.module.css'
import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "icon"
}


const Button = ({variant="default", children, ...rest}: ButtonProps) => {

  const classMap = {
    default: styles.default,
    icon: styles.icon
  }

  return (
    <button {...rest} className={classNames(styles.botao, classMap[variant])}>
      {children}
    </button>
  )
}

export default Button