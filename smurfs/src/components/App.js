import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class App extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     props: props
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <button onClick={this.props.getSmurfs} >Get Smurfs</button>
        {this.props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
};

const mapDispatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(App);
