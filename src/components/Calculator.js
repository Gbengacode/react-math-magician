import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => ({
      data: calculate(state.data, e.target.name),
    }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="calc-cover">
        <div className="output">
          <div className="prev-operand">0</div>
          <div className="curr-operand">
            {' '}
            { data.next || data.operation || data.total || 0 }
          </div>
        </div>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="AC">AC</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="+/-">+/-</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="%">%</button>
        <button type="button" className="operator" onClick={(e) => { this.handleClick(e); }} name="÷">÷</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="7">7</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="8">8</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="9">9</button>
        <button type="button" className="operator" onClick={(e) => { this.handleClick(e); }} name="x">x</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="4">4</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="5">5</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="6">6</button>
        <button type="button" className="operator" onClick={(e) => { this.handleClick(e); }} name="-">-</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="1">1</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="2">2</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name="3">3</button>
        <button type="button" className="operator" onClick={(e) => { this.handleClick(e); }} name="+">+</button>
        <button type="button" className="double" onClick={(e) => { this.handleClick(e); }} name="0">0</button>
        <button type="button" onClick={(e) => { this.handleClick(e); }} name=".">.</button>
        <button type="button" className="operator" onClick={(e) => { this.handleClick(e); }} name="=">=</button>
      </div>
    );
  }
}
