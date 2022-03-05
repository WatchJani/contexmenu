import ReactDOM from 'react-dom';
import { ContextMenuView } from './ContexMenuView/contextMenuView';
import { ContextMenuButton } from './ContextMenuControl/ContextMenuButton/contextMenuButton';
import { ContextMenuCheckBox } from './ContextMenuControl/ContextMenuCheckBox/contexMenuCheckBox';
import { ContextMenuGroup } from './ContextMenuControl/ContexMenuGroup/contexMenuGroup';
import ContextMenuSubMenu from './ContextMenuControl/ContextMenuSubMenu/ContextMenuSubMenu';

const App = () => {
  const fja = () => {
    alert('Asd');
  };

  const subFja = () => {
    alert('sub');
  };

  const data = [
    {
      name: ContextMenuButton,
      text: 'Profil',
      action: fja,
    },
    {
      name: ContextMenuButton,
      text: 'Spomeni',
      action: fja,
    },
    {
      name: ContextMenuButton,
      text: 'Pošalji poruku',
      action: fja,
    },
    {
      name: ContextMenuButton,
      text: 'Dodaj bilješku',
      action: fja,
    },
    {
      name: ContextMenuGroup,
    },
    {
      name: ContextMenuCheckBox,
      text: 'Isključi mikrofon',
    },
    {
      name: ContextMenuButton,
      text: 'Mijenjanje nadimka',
    },
    {
      name: ContextMenuButton,
      text: 'Ukloni prijatelja',
    },
    {
      name: ContextMenuButton,
      text: 'Blokiraj',
    },
    {
      name: ContextMenuGroup,
    },
    {
      name: ContextMenuCheckBox,
      text: 'Utišaj server',
      color: '#ED4245',
    },
    {
      name: ContextMenuCheckBox,
      text: 'Ogluši širom servera',
      color: '#ED4245',
    },
    {
      name: ContextMenuButton,
      text: 'Prekini Vezu',
      color: '#ED4245',
    },
    {
      name: ContextMenuButton,
      text: 'Timeout za korisnik Savo',
      color: '#ED4245',
    },
    {
      name: ContextMenuButton,
      text: 'Izbaci korisnika Savo',
      color: '#ED4245',
    },
    {
      name: ContextMenuButton,
      text: 'Banaj korisnika Savo',
      color: '#ED4245',
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
  ];

  return <ContextMenuView data={data} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
