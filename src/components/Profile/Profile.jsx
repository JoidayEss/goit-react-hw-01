import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.people} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.followers}>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.followers}>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.followers}>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
