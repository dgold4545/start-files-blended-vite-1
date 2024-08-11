import styles from './BlogCard.module.css';

export const BlogCard = props => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          className={styles.cardPoster}
          src={props.poster}
          alt="card__image"
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}>{props.tag}</span>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardText}>{props.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.userBox}>
          <img className={styles.avatar} src={props.avatar} alt="Jane Doe" />
          <div>
            <h3 className={styles.userName}>{name}</h3>
            <small className={styles.date}>{props.postedAt}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
