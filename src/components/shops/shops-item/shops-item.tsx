import {Shop} from '../../../types';
import styles from './shops-item.module.scss';

interface ShopsItemProps {
  item: Shop
}

const ShopsItem: React.FC<ShopsItemProps> = (props) => {
  const {pictureUrl, text, name} = props.item;
  return (
    <li className={styles.shops_item}>
      <img className={styles.shops_item__icon} src={pictureUrl} alt={name}/>
      <div className={styles.shops_item__wrapper}>
        <p className={styles.shops_item__wrapper_text}>{text}</p>
        <p className={styles.shops_item__wrapper_name}>{name}</p> 
      </div>
    </li>
  );
};

export default ShopsItem;