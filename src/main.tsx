import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from './mock';

createRoot(document.getElementById('root')!).render(
  createElement(
    'div',
    {},
    restaurants.map((resto) => {
      return createElement('div', { key: resto.id }, [
        createElement('h1', { key: 'restoName' }, resto.name),
        createElement('h3', { key: 'restoMenu' }, 'Меню'),
        createElement(
          'ul',
          { key: 'restoMenuList' },
          resto.menu.map((menuItem) =>
            createElement('li', { key: menuItem.id }, [
              menuItem.name,
              ` (${menuItem.ingredients.join(', ')})`,
              ': ',
              menuItem.price,
            ])
          )
        ),
        createElement('h3', { key: 'restoReviews' }, 'Отзывы'),
        createElement(
          'ul',
          { key: 'restoReviewsList' },
          resto.reviews.map((review) =>
            createElement('li', { key: review.id }, [
              review.user,
              ' ',
              review.text,
              ` (${review.rating})`,
            ])
          )
        ),
        createElement('hr', { key: 'delimiter' }),
      ]);
    })
  )
);
