import { type FunctionComponent } from 'react';
import styles from './counter.module.css';

type CounterProps = {
  onIncrementClicked: () => void;
  onDecrementClicked: () => void;
  value: number;
};

export const Counter: FunctionComponent<CounterProps> = ({
  onIncrementClicked,
  onDecrementClicked,
  value,
}) => {
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
