import { type FormEvent, useReducer } from 'react';
import { useCounter } from '../counter/use-counter.ts';
import { Counter } from '../counter/Counter.tsx';

type FormActionArguments =
  | { type: 'setNameAction'; payload: string }
  | { type: 'setTextAction'; payload: string }
  | { type: 'setRatingValueAction'; payload: number }
  | { type: 'clearReviewAction'; payload: undefined };

type FormState = {
  name: string;
  text: string;
};

const initialFormState: FormState = {
  name: '',
  text: '',
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
  const { value, increment, decrement, reset } = useCounter(0, 5);

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
        onDecrementClicked={decrement}
        onIncrementClicked={increment}
        value={value}
      />

      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'clearReviewAction', payload: undefined });
          reset();
        }}
      >
        Clear
      </button>
    </form>
  );
};
