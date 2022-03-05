import Styled from './contextMenuView.module.css';

export const ContextMenuView = ({ data }) => {
  return (
    <div className={Styled.Container}>
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
