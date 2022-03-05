import Styled from "./button.module.css"

export const ContextMenuButton = ({ text, action, color }) => {
    return (
        <button className={Styled.button} style={{ color: color }} onClick={action}>
            {text}
        </button>
    )
}