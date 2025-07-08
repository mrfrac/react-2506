import { type FunctionComponent, useState } from 'react';
import type { Restaurant } from '../../types';
import { RestaurantCard } from '../restaurant-card/RestaurantCard.tsx';

type RestaurantsListProps = {
  restaurants: Restaurant[];
};

export const RestaurantsList: FunctionComponent<RestaurantsListProps> = ({
  restaurants,
}) => {
  const [selectedId, setSelectedId] = useState<string>(restaurants[0].id);
  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedId
  );

  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '16px',
          display: 'flex',
          gap: '16px',
        }}
      >
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <button
              type="button"
              style={{
                backgroundColor:
                  selectedId === restaurant.id ? '#ccc' : 'initial',
              }}
              onClick={() => setSelectedId(restaurant.id)}
            >
              <h2>{restaurant.name}</h2>
            </button>
          </li>
        ))}
      </ul>

      {selectedRestaurant && <RestaurantCard restaurant={selectedRestaurant} />}
    </>
  );
};
