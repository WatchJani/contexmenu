import { useState, useEffect, useCallback } from "react";

export const useContextMenu = () => {

    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const handleContextMenu = (event) => {
        event.preventDefault();
        event.stopPropagation()
        setAnchorPoint({ x: event.pageX, y: event.pageY });
        setShow(true);
    }

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

    const call = (event) => {
        event.preventDefault();
        handleClick()
    }


    useEffect(() => {
        document.addEventListener("click", handleClick);
    }, [anchorPoint])

    return { anchorPoint, show, handleContextMenu, call }
}