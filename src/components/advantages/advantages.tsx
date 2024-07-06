import { ADVANTAGES } from '../../constants';
import AdvantagesItem from './advantages-item/';
import styles from './advantages.module.scss';

const Advantages: React.FC = () => {
  return (
    <ul className={styles.advantages}>
      {ADVANTAGES.map((advantage, index) => {
        return <AdvantagesItem key={`adv-item-${index}`} item={advantage}/>;
      })}
    </ul>
  );
};

export default Advantages;
