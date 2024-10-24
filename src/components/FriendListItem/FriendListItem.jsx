import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friends}>
      <img src={avatar} alt="Avatar" width="48" className={css.img} />
      <p className={css.name}>{name}</p>
      <p
        className={clsx({
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
