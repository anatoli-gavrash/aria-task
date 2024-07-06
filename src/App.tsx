import styles from './App.module.scss';
import Attract from './components/attract';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Attract />
    </div>
  );
};

export default App;
