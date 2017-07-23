const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

const initialState = {
  value1: 0,
  value2: 0,
  value3: 0
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREASE:
    return {
      ...state,
      [`value${action.number}`]: state[`value${action.number}`] + 1
    }
    case DECREASE:
    return {
      ...state,
      [`value${action.number}`]: state[`value${action.number}`] - 1
    }
    default:
    return state;
  }
}

// {
//   type: INCREASE,
//   number: 1
// }

export function increase(number) {
  return {
    type: INCREASE,
    number: number
  }
}

export function decrease(number) {
  return {
    type: DECREASE,
    number: number
  }
}
