import { SHOPS } from '../../constants';
import ShopsItem from './shops-item';
import styles from './shops.module.scss';

const Shops: React.FC = () => {
  return (
    <ul className={styles.shops}>
      {SHOPS.map((shop, index) => {
        return <ShopsItem key={`shop-item-${index}`} item={shop}/>;
      })}
    </ul>
  );
};

export default Shops;
