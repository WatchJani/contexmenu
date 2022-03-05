import Styled from './Submenu.module.css';

function Submenu({ menu, active }) {
  console.log(menu);
  return (
    <div className={Styled.compont}>
      <div className={Styled.submenuContainer}>
        {menu.map((item, i) => (
          <item.name text={item.text} className={Styled.button} />
        ))}
      </div>
    </div>
  );
}

export default Submenu;
