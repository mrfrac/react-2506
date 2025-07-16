import { type FormEvent, useReducer } from 'react';
import { Counter } from '../counter/Counter.tsx';

type FormActionArguments =
  | { type: 'setNameAction'; payload: string }
  | { type: 'setTextAction'; payload: string }
  | { type: 'setRatingValueAction'; payload: number }
  | { type: 'clearReviewAction'; payload: undefined }
  | { type: 'increaseRatingAction'; payload: undefined }
  | { type: 'decreaseRatingAction'; payload: undefined };

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
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        rowGap: '8px',
      }}
      onSubmit={(e: FormEvent) => e.preventDefault()}
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
