import React from "react";
import styles from './SelectorGroup.module.css'

interface SelectorGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode;
}


const SelectorGroup = ({icon, children, ...rest}: SelectorGroupProps) => {
    return (
        <div className={styles.container}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <select className={styles.selector} {...rest}>{children}</select>
        </div>
    )
}

export default SelectorGroup;
