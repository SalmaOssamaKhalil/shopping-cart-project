import React from "react"
import { ButtonProps } from "./type"
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({
 disabled,
 onClick,
 text
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={styles.Button}
        >
        {text}
      </button>)
}

export default Button

