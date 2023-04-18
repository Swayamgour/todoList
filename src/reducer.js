import actions from './actions';

const intianalData = [
  {
    id: 1,
    task: "swayam",
    isComplete: false
  }

];

export const todoData = (state = intianalData, action) => {
  switch (action.type) {
    case actions.ADD:
      const NewTask = {
        id: Math.random(),
        task: action.payload,
        isComplete: false,
      };
      return [...state, NewTask];

      case actions.DELETE:
      state = state.filter((y) => y.id !== action.payload);
      return state;

    case actions.COMPLETE:
    action.payload.isComplete = true;
      state = [...state];
      return state;

    default:
      return state;
  }
};
