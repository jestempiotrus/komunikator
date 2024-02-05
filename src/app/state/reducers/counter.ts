import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
}

export function counterReducer(state: CounterState = initialState, action: Action) {

  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });

    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}