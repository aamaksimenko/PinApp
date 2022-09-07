import styles from './Pin.module.css';

export function Pin() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pinInputCircles}>
        <div className={styles.pinInputItem}>1</div>
        <div className={styles.pinInputItem}>2</div>
        <div className={styles.pinInputItem}>3</div>
        <div className={styles.pinInputItem}>4</div>
        <div className={styles.pinInputItem}>5</div>
        <div className={styles.pinInputItem}>6</div>
      </div>
      <div className={styles.keypad}>
        <button className={styles.keyPadButton}>1</button>
        <button className={styles.keyPadButton}>2</button>
        <button className={styles.keyPadButton}>3</button>
        <button className={styles.keyPadButton}>4</button>
        <button className={styles.keyPadButton}>5</button>
        <button className={styles.keyPadButton}>6</button>
        <button className={styles.keyPadButton}>7</button>
        <button className={styles.keyPadButton}>8</button>
        <button className={styles.keyPadButton}>9</button>
        <button className={`${styles.keyPadButton} ${styles.zero}`}>0</button>
        <button className={styles.keyPadButton}>C</button>
      </div>
    </div>
  );
}
