import Styled from './contextMenuView.module.css';

export const ContextMenuView = ({ data, PositionX, PositionY }) => {
  return (
    <div className={Styled.Container} style={{ position: "absolute", top: PositionY, left: PositionX }}>
      {data.map((e) => {
        return (
          <e.name
            text={e.text}
            color={e.color}
            menu={e.menu}
            action={e.action}
          />
        );
      })}
    </div>
  );
};
