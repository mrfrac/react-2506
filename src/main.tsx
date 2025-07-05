import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from './mock';

createRoot(document.getElementById('root')!).render(
  createElement(
    'div',
    {},
    restaurants.map((restaurant) => {
      return createElement('div', { key: restaurant.id }, [
        <h1>{restaurant.name}</h1>,
        <h3>Меню</h3>,
        createElement(
          'ul',
          {},
          restaurant.menu.map((menuItem) =>
            createElement('li', { key: menuItem.id }, [
              menuItem.name,
              ` (${menuItem.ingredients.join(', ')})`,
              ': ',
              menuItem.price,
            ])
          )
        ),
        <h3>Отзывы</h3>,
        createElement(
          'ul',
          {},
          restaurant.reviews.map((review) =>
            createElement('li', { key: review.id }, [
              review.user,
              ': ',
              review.text,
              ` (${review.rating})`,
            ])
          )
        ),
        <hr />,
      ]);
    })
  )
);
