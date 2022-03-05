import { useState } from 'react';
import Button from '../ContextMenuButton/button.module.css';
import Styled from './ContextMenuSubMenu.module.css';
import Submenu from './Submenu';

function ContextMenuSubMenu({ menu, text }) {
  const [submenuActive, setSubmenuActive] = useState(false);
  return (
    <div className={Styled.container}>
      <button
        className={Button.button}
        onMouseEnter={() => setSubmenuActive(true)}
        onMouseLeave={() => setSubmenuActive(false)}
      >
        {text}
        {submenuActive && <Submenu menu={menu} />}
      </button>
    </div>
  );
}

export default ContextMenuSubMenu;
