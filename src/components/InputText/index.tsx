import styles from './InputText.module.css'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText = ({...props}: InputTextProps) => {
  return (
    <input className={styles.input} {...props}/>
  )
}

export default InputText