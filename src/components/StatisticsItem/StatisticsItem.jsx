import style from './Statistics.module.css';

export const StatisticsItem = ({ stats, icon }) => {
  return (
    <>
      {icon}

      <span className={style.counter}>{stats.total}</span>
      <p className={style.text}>{stats.title}</p>
    </>
  );
};
