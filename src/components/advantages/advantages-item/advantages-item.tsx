import {Advantage} from '../../../types';
import styles from './advantages-item.module.scss';

interface AdvantageItemProps {
  item: Advantage
}

const AdvantagesItem: React.FC<AdvantageItemProps> = (props) => {
  const {title, value} = props.item;

  return (
    <li className={styles.advantages_item}>
      <p className={styles.advantages_item__value}>{value}</p>
      <p className={styles.advantages_item__title}>{title}</p>
    </li>
  );
};

export default AdvantagesItem;
