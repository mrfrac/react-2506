import { Layout } from '../layout/Layout.tsx';
import 'normalize.css/normalize.css';
import { ThemeContextProvider } from '../theme-context/theme-context-provider.tsx';
import { UserContextProvider } from '../user-context/user-context-provider.tsx';
import { Provider } from 'react-redux';
import { store } from '../../redux/store.ts';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '../home-page/HomePage.tsx';
import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.tsx';
import { RestaurantPage } from '../../pages/RestaurantPage.tsx';

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsPage />} />
                <Route
                  path="/restaurants/:restaurantId"
                  element={<RestaurantPage />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
