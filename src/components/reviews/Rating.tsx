import type { FunctionComponent } from 'react';

type RatingProps = {
  rating: number;
};

export const Rating: FunctionComponent<RatingProps> = ({ rating }) => {
  return (
    <>
      {Array.from({ length: rating }, (_, index) => index + 1).map((index) => (
        <span key={index}>★</span>
      ))}
    </>
  );
};
