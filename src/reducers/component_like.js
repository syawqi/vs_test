const initialState = {
  like: 0,
};

const componentLike = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_LIKE':
      return {
        like: state.like + 1,
      };
    case 'DECREASE_LIKE':
      return {
        like: state.like - 1,
      };
    case 'RESET_ALL':
      return {
        like: 0,
      };
    default:
      return state;
  }
};

export default componentLike;
