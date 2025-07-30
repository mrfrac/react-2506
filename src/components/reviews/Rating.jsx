export const Rating = ({ rating }) => {
  return (
    <>
      {Array.from({ length: rating }, (_, index) => index + 1).map((index) => (
        <span key={index}>★</span>
      ))}
    </>
  );
};
