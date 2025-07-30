import { useEffect, useState } from 'react';
import styles from './scroll-progress.module.css';

export const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setWidth(
        Math.floor(
          (document.documentElement.scrollTop /
            (document.documentElement.scrollHeight -
              document.documentElement.clientHeight)) *
            100
        )
      );
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className={styles.progress}
      style={{
        width: `${width}%`,
      }}
    />
  );
};
