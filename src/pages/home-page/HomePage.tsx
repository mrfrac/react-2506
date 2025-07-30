import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/restaurants">Рестораны</Link>
    </>
  );
};
