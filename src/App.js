import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import { connect } from 'react-redux'
import { increase, decrease } from './redux/counter'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value1: 0,
  //     value2: 0,
  //     value3: 0
  //   }
  // }
  // increase = (number) => {
  //   this.setState({
  //     [`value${number}`]: this.state[`value${number}`] + 1
  //   })
  // }
  // decrease = (number) => {
  //   this.setState({
  //     [`value${number}`]: this.state[`value${number}`] - 1
  //   })
  // }
  render() {
    const {
      value1,
      value2,
      value3,
      add,
      minus
    } = this.props
    return (
      <div className="App">
        <Counter
          increaseLabel="+++"
          decreaseLabel="---"
          increaseFunc={() => {add(1)}}
          decreaseFunc={() => {minus(1)}}
          value={value1} />
        <Counter
          increaseLabel="++"
          decreaseLabel="--"
          increaseFunc={() => {add(2)}}
          decreaseFunc={() => {minus(2)}}
          value={value2} />
        <Counter
          increaseLabel="+"
          increaseFunc={() => {add(3)}}
          decreaseFunc={() => {minus(3)}}
          value={value3} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value1: state.value1,
    value2: state.value2,
    value3: state.value3
  }
} // take data from redux
function mapDispatchToProps(dispatch) {
  return {
    add: (number) => {
      dispatch(increase(number))
    },
    minus: (number) => {
      dispatch(decrease(number))
    }
  }
} // transform action into redux

export default connect(mapStateToProps, mapDispatchToProps)(App);
