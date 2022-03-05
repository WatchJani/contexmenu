import Styled from './Submenu.module.css';

function Submenu({ menu }) {
  console.log(menu);
  return (
    <div className={Styled.compont}>
      <div className={Styled.submenuContainer}>
        {menu.map((item, i) => (
          <item.name text={item.text} action={item.action} className={Styled.button} />
        ))}
      </div>
    </div>
  );
}

export default Submenu;
