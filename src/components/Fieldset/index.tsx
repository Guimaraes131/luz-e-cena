import classNames from 'classnames'
import styles from './Fieldset.module.css'

interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant?: "primary" | "secondary"
}

const Fieldset = ({children, variant="primary"}: FieldsetProps) => {

  const classes = {
    primary: styles.primary,
    secondary: styles.secondary
  }

  return (
    <fieldset className={classNames(styles.inputWrapper, classes[variant])}>{children}</fieldset>
  )
}

export default Fieldset