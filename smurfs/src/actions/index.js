import axios from 'axios';
// import e from 'express';
// import { bindActionCreators } from 'redux';

const testSmurf = {
  name: "Brainey",
  age: 200,
  height: "5cm",
};

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
  // e.preventDefault();
  console.log(newSmurf);
  // axios
  //   .post(`http://localhost:3333/smurfs`, newSmurf)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  dispatch({type: "SUBMITTING_SMURF_START", payload: newSmurf})
} 