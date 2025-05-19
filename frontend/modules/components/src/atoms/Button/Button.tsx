import React from "react"
import { ButtonProps } from "./type"
import styles from './Button.module.scss'

/**
 * A reusable button component.
 * 
 * Renders a styled `<button>` element that can be disabled and
 * responds to click events.
 * 
 * @param {boolean} disabled - If true, disables the button.
 * @param {() => void} onClick - Function to call when the button is clicked.
 * @param {string} text - The text displayed inside the button.
 */
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

