import React from 'react'
import styles from './MenuList.module.css'

interface MenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

const MenuList = ({children}: MenuListProps) => {
  return (
    <nav>
      <ul className={styles.navegacao}>
        {children}
      </ul>
    </nav>
  )
}

export default MenuList