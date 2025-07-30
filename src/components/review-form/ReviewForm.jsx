import { useReducer } from 'react';
import { Counter } from '../counter/Counter.jsx';
import styles from './review-form.module.css';

const initialFormState = {
  name: '',
  text: '',
  rating: 0,
};

function formReducer(state, { type, payload }) {
  switch (type) {
    case 'setNameAction': {
      return {
        ...state,
        name: payload,
      };
    }
    case 'setTextAction': {
      return {
        ...state,
        text: payload,
      };
    }
    case 'setRatingValueAction': {
      return {
        ...state,
        rating: payload,
      };
    }
    case 'clearReviewAction': {
      return {
        ...initialFormState,
        rating: 0,
      };
    }
    case 'increaseRatingAction': {
      return {
        ...state,
        rating: state.rating + 1,
      };
    }
    case 'decreaseRatingAction': {
      return {
        ...state,
        rating: state.rating - 1,
      };
    }
    default:
      return state;
  }
}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">
        <strong>Имя</strong>
      </label>
      <input
        id="name"
        type="text"
        name="reviews"
        value={form.name}
        onChange={(event) =>
          dispatch({
            type: 'setNameAction',
            payload: event.target.value,
          })
        }
      />

      <label htmlFor="text">
        <strong>Отзыв</strong>
      </label>
      <textarea
        id="text"
        value={form.text}
        onChange={(event) =>
          dispatch({
            type: 'setTextAction',
            payload: event.target.value,
          })
        }
      ></textarea>

      <strong>Рейтинг</strong>

      <Counter
        onDecrementClicked={() =>
          dispatch({ type: 'decreaseRatingAction', payload: undefined })
        }
        onIncrementClicked={() =>
          dispatch({ type: 'increaseRatingAction', payload: undefined })
        }
        value={form.rating}
      />

      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'clearReviewAction', payload: undefined });
        }}
      >
        Clear
      </button>
    </form>
  );
};
