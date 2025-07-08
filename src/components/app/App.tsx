import { restaurants } from '../../constants/mock.ts';
import { Layout } from '../layout/Layout.tsx';
import { RestaurantsList } from '../restaurants-list/RestaurantsList.tsx';

export const App = () => {
  return (
    <Layout>
      <RestaurantsList restaurants={restaurants} />
    </Layout>
  );
};
