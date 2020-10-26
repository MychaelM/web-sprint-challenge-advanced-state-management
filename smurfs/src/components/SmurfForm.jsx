import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm = (props) => {
const [formData, setFormData] = useState({
  name: "",
  age: 0,
  height: "",
  id: Date.now(),
})

const handleChanges = (e) => {
  // console.log(formData)
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

return (
  <>
  <h2>Add New Smurf</h2>
  <form>
    <label htmlFor="name">Smurf Name: </label>
    <input 
    type="text" 
    name="name" 
    id="name" 
    onChange={handleChanges} 
    value={formData.name}
    />
    <br/>

    <label htmlFor="age">Smurf Age: </label>
    <input 
    type="number" 
    name="age" 
    id="age"
    onChange={handleChanges}
    value={formData.age}
    />
    <br/>

    <label htmlFor="height">Smurf Height: </label>
    <input 
    type="number" 
    name="height" 
    id="height"
    onChange={handleChanges}
    value={formData.height}
    />
    <br/>

    <button onClick={props.addSmurf}>Submit</button>
  </form>
  </>
)
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = { addSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);