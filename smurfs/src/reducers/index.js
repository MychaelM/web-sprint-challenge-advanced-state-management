const initialState = {
  smurfs: [],
  newSmurf: {}
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURFS_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
      };

    case "SUBMITTING_SMURF_START":
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          action.payload
        ]
      }

    default:
      return state;
  }
};