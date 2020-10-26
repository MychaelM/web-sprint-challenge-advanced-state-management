import axios from 'axios';
import e from 'express';
// import { bindActionCreators } from 'redux';

export const getSmurfs = () => (dispatch) => {
  dispatch({type: "FETCHING_SMURFS_START"});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
      console.log(res);
      dispatch({type: "FETCHING_SMURFS_SUCCESS", payload: res.data})
    })
    .catch((err) => {
      console.log(err);
      dispatch({type: "FETCHING_SMURFS_FAILURE", payload: err})
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  e.preventDefault();
  console.log(newSmurf);
  dispatch({type: "SUBMITTING_SMURF_START", payload: newSmurf})
} 