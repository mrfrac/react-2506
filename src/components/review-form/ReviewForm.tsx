import { useReducer } from 'react';
import { ReviewRatingCounter } from '../review-rating-counter/ReviewRatingCounter.tsx';

type FormActionArguments =
  | { type: 'setNameAction'; payload: string }
  | { type: 'setTextAction'; payload: string }
  | { type: 'setRatingValueAction'; payload: number }
  | { type: 'clearReviewAction'; payload: undefined };

type FormState = {
  name: string;
  text: string;
  rating: number;
};

const initialFormState: FormState = {
  name: '',
  text: '',
  rating: 0,
};

function formReducer(state: FormState, { type, payload }: FormActionArguments) {
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
    default:
      return state;
  }
}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        rowGap: '8px',
      }}
    >
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

      <ReviewRatingCounter
        onRatingChange={(payload) =>
          dispatch({ type: 'setRatingValueAction', payload })
        }
      ></ReviewRatingCounter>

      <button
        type="button"
        onClick={() =>
          dispatch({ type: 'clearReviewAction', payload: undefined })
        }
      >
        Clear
      </button>
    </form>
  );
};
