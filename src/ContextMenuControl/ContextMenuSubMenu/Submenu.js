import Styled from './Submenu.module.css';

function Submenu({ menu, active }) {
  console.log(menu);
  return (
    <div className={Styled.submenuContainer}>
      {menu.map((item, i) => (
        <p key={i}>{item.text}</p>
      ))}
    </div>
  );
}

export default Submenu;
