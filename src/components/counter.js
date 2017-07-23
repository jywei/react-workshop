import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0
  //   };
  // }
  componentWillMount() {
    console.log("will mount")
  }
  componentDidMount() {
    console.log("did mount")
  }
  // static propTypes = {
  //   increaseLabel: PropTypes.string,
  //   decreaseLabel: PropTypes.string
  // }
  // static defaultProps = {
  //   increaseLabel: "plus",
  //   decreaseLabel: "minus"
  // }
  // increase = () => {
  //   this.setState({
  //     value: this.state.value + 1
  //   })
  // }
  // decrease = () => {
  //   this.setState({
  //     value: this.state.value - 1
  //   })
  // }
  render() {
    console.log("render")
    // const {value} = this.state; // this.state.value
    const {increaseLabel, decreaseLabel, value, increaseFunc, decreaseFunc} = this.props;
    return (
      <div className="Counter">
        <button onClick={decreaseFunc}>{decreaseLabel}</button>
        <span>{value}</span>
        <button onClick={increaseFunc}>{increaseLabel}</button>
      </div>
    );
  }
}

export default Counter;
