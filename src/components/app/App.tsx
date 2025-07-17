import { restaurants } from '../../constants/mock.ts';
import { Layout } from '../layout/Layout.tsx';
import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.tsx';
import { ScrollProgress } from '../scroll-progress/ScrollProgress.tsx';
import 'reset-css/reset.css';

export const App = () => {
  return (
    <Layout>
      <ScrollProgress />
      <RestaurantsPage restaurants={restaurants} />
    </Layout>
  );
};
