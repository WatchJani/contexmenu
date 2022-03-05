import Styled from "./contextMenuCheckBox.module.css"


export const ContextMenuCheckBox = ({ text, color }) => {


    return (
        <div className={Styled.object}>
            <p style={{color: color}} className={Styled.TextChackBox}>{text}</p>
            <input type="checkbox" name="" id="" />
        </div>
    )
}