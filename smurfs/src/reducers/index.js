const initialState = {
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURFS_SUCCESS":
      return {
        ...state,
        smurfs: action.payload
      }

    default:
      return state;
  }
};