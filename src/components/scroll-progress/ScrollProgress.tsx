import { useEffect, useState } from 'react';

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${width}%`,
        backgroundColor: 'tomato',
        height: '5px',
      }}
    />
  );
};
