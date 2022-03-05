import Styled from "./button.module.css"

export const ContextMenuButton = ({ text, action }) => {
    return (
        <button className={Styled.button} onClick={action}>
            {text}
        </button>
    )
}