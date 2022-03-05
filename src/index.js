import ReactDOM from 'react-dom';
import { ContextMenuView } from './ContexMenuView/contextMenuView';
import { ContextMenuButton } from './ContextMenuControl/ContextMenuButton/contextMenuButton';
import { ContextMenuCheckBox } from './ContextMenuControl/ContextMenuCheckBox/contexMenuCheckBox';
import { ContextMenuGroup } from './ContextMenuControl/ContexMenuGroup/contexMenuGroup';
import ContextMenuSubMenu from './ContextMenuControl/ContextMenuSubMenu/ContextMenuSubMenu';
import Submenu from './ContextMenuControl/ContextMenuSubMenu/Submenu';

const App = () => {
  const fja = () => {
    alert('Asd');
  };

  const subFja = () => {
    alert('sub');
  };

  const submenu = [];

  const data = [
    {
      name: ContextMenuButton,
      text: 'Skupi sve kategorije',
      action: fja,
    },
    {
      name: ContextMenuButton,
      text: 'Uredi kategorije',
      action: null,
    },
    {
      name: ContextMenuButton,
      text: 'Skupi sve kategorije',
      action: fja,
    },
    {
      name: ContextMenuButton,
      text: 'Uredi kategorije',
      action: null,
    },
    {
      name: ContextMenuGroup,
      text: null,
      action: null,
    },
    {
      name: ContextMenuCheckBox,
      text: 'Skupi kategoriju',
      action: null,
    },
    {
      name: ContextMenuSubMenu,
      text: 'Lista podkategorija 1',
      menu: [
        { text: 'Submenu 1', action: subFja },
        { text: 'Submenu 2', action: subFja },
        { text: 'Submenu 3', action: subFja },
      ],
    },
    {
      name: ContextMenuSubMenu,
      text: 'Lista podkategorija 2 ',
      menu: [
        { text: 'Submenu 4', action: subFja },
        { text: 'Submenu 5', action: subFja },
        { text: 'Submenu 6', action: subFja },
      ],
    },

    {
      name: ContextMenuSubMenu,
      text: 'Lista podkategorija 3',
      menu: [
        { text: 'Submenu 7', action: subFja },
        { text: 'Submenu 8', action: subFja },
        { text: 'Submenu 9egr89egw9ewegwegwegwegw', action: subFja },
      ],
    },
  ];

  return <ContextMenuView data={data} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
