type CounterState = {
  count: number;
}

enum CounterActionType {
  Increment = 'INCREMENT',
}

type CounterAction = {
  type: CounterActionType;
  payload: number;
}

const initialCounterState: CounterState = {
  count: 0,
};

const counterReducer = (state: CounterState, action: CounterAction) => {
  const { type, payload } = action;
  switch (type) {
    case CounterActionType.Increment: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { counterReducer, initialCounterState, CounterActionType };
export type { CounterState }