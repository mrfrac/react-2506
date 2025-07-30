import styles from './counter.module.css';

export const Counter = ({ onIncrementClicked, onDecrementClicked, value }) => {
  return (
    <div className={styles.counter}>
      <button type="button" onClick={onDecrementClicked}>
        -
      </button>
      {value}
      <button type="button" onClick={onIncrementClicked}>
        +
      </button>
    </div>
  );
};
