import styles from './FieldSet.module.css';

type FieldSetProps = {
    variant?: "primary" | "secondary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const FieldSet = ({variant="primary", children}: FieldSetProps) => {
    return (
        <fieldset
            className={
                `${styles.inputWrapper} ${variant === "primary" ? styles.primary : styles.secondary}`
                }
        >
            {children}
        </fieldset>
    )
}

export default FieldSet