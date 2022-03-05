import ReactDOM from "react-dom"
import { ContextMenuView } from "./ContexMenuView/contextMenuView"
import { ContextMenuButton } from "./ContextMenuControl/ContextMenuButton/contextMenuButton"
import { ContextMenuCheckBox } from "./ContextMenuControl/ContextMenuCheckBox/contexMenuCheckBox"
import { ContextMenuGroup } from "./ContextMenuControl/ContexMenuGroup/contexMenuGroup"
const App = () => {

    const fja = () => {
        alert("Asd")
    }


    const data = [
        {
            name: ContextMenuButton,
            text: "Skupi sve kategorije",
            action: fja
        },
        {
            name: ContextMenuButton,
            text: "Uredi kategorije",
            action: null
        },
        {
            name: ContextMenuButton,
            text: "Skupi sve kategorije",
            action: fja
        },
        {
            name: ContextMenuButton,
            text: "Uredi kategorije",
            action: null
        },
        {
            name: ContextMenuGroup,
            text: null,
            action: null
        },
        {
            name: ContextMenuCheckBox,
            text: "Skupi kategoriju",
            action: null
        }
    ]


    return (
        <ContextMenuView data={data} />
    )
}

ReactDOM.render(<App />, document.getElementById("app"))