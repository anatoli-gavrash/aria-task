import styles from './attract.module.scss';
import Advantages from '../advantages';
import Shops from '../shops';
import Posts from '../posts';

const Attract: React.FC = () => {
  return (
    <article className={styles.attract}>
      <div className={styles.attract__decor}>
        <img className={styles.attract__decor_img} src='./img/svg/decor__bitcoin.svg' alt='bitecoin'/>
        <img className={styles.attract__decor_img} src='./img/svg/decor__litecoin.svg' alt='litecoin'/>
        <img className={styles.attract__decor_img} src='./img/svg/decor__ethereum.svg' alt='ethereum'/>
      </div>
      <h2 className={styles.attract__title}>Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span></h2>
      <p className={styles.attract__text}>Subscribe to our channel to learn more</p>
      <Advantages />
      <button className={styles.attract__button}>Join Whatsapp</button>
      <Shops />
      <Posts />
    </article>
  );
}

export default Attract;