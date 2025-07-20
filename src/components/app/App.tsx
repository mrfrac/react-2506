import { restaurants } from '../../constants/mock.ts';
import { Layout } from '../layout/Layout.tsx';
import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.tsx';
import { ScrollProgress } from '../scroll-progress/ScrollProgress.tsx';
import 'normalize.css/normalize.css';
import { ThemeContextProvider } from '../theme-context/theme-context-provider.tsx';

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <ScrollProgress />
        <RestaurantsPage restaurants={restaurants} />
      </Layout>
    </ThemeContextProvider>
  );
};
