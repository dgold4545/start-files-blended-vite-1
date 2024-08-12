import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
// import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
// import style from './Statistics.module.css';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  let arr = [
    <FaRegThumbsUp size={24} />,
    <MdPeople size={24} />,
    <MdOutlineProductionQuantityLimits size={24} />,
    <GiTreeDoor size={24} />,
  ];

  return (
    <div>
      {title && <h3 className={style.title}>Main Statistics</h3>}

      <ul className={style.list}>
        {stats.map((data, index) => {
          return (
            <li className={style.item} key={data.id}>
              <StatisticsItem stats={data} icon={arr[index]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
