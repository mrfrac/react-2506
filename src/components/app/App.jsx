import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { DishPage } from '../../pages/dish-page/DishPage';
import { HomePage } from '../../pages/home-page/HomePage';
import { RestaurantPage } from '../../pages/restaurant-page/RestaurantPage';
import { store } from '../../redux/store';
import { RestaurantReviews } from '../../restaurant-reviews/RestaurantReviews';
import { Layout } from '../layout/Layout';
import 'normalize.css/normalize.css';
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu';
import { RestaurantsPage } from '../restaurants-page/RestaurantsPage';
import { ThemeContextProvider } from '../theme-context/theme-context-provider';
import { UserContextProvider } from '../user-context/user-context-provider';

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
