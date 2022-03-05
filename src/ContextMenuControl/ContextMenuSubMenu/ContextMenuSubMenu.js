import { useState } from 'react';
import Button from '../ContextMenuButton/button.module.css';
import Styled from './ContextMenuSubMenu.module.css';
import Submenu from './Submenu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ContextMenuSubMenu({ menu, text }) {
  const [submenuActive, setSubmenuActive] = useState(false);
  return (
    <div className={Styled.container}>
      <div
        className={Button.button}
        onMouseEnter={() => setSubmenuActive(true)}
        onMouseLeave={() => setSubmenuActive(false)}
      >
        <p className={Styled.para}>{text}</p> <ArrowForwardIosIcon fontSize='smal' />
        {submenuActive && <Submenu menu={menu} />}
      </div>
    </div>
  );
}

export default ContextMenuSubMenu;
