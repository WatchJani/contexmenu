import Styled from "./contextMenuCheckBox.module.css"

export const ContextMenuCheckBox = ({ text }) => {
    return (
        <div className={Styled.object}>
            <p className={Styled.TextChackBox}>{text}</p>
            <input type="checkbox" name="" id="" />
        </div>
    )
}