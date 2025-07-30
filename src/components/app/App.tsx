import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { DishPage } from '../../pages/dish-page/DishPage.tsx';
import { HomePage } from '../../pages/home-page/HomePage.tsx';
import { RestaurantPage } from '../../pages/restaurant-page/RestaurantPage.tsx';
import { store } from '../../redux/store.ts';
import { RestaurantReviews } from '../../restaurant-reviews/RestaurantReviews.tsx';
import { Layout } from '../layout/Layout.tsx';
import 'normalize.css/normalize.css';
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu.tsx';
import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.tsx';
import { ThemeContextProvider } from '../theme-context/theme-context-provider.tsx';
import { UserContextProvider } from '../user-context/user-context-provider.tsx';

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
                >
                  <Route index element={<Navigate to="menu" />} />
                  <Route path="menu" element={<RestaurantMenu />} />
                  <Route path="reviews" element={<RestaurantReviews />} />
                </Route>
              </Route>
              <Route path="/dish/:dishId" element={<DishPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
