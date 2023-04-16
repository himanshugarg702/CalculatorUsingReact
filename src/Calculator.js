import React from 'react';
import { connect } from 'react-redux';
import {
  inputNumber,
  inputDecimal,
  clear,
  add,
  subtract,
  multiply,
  divide,
  equals,
  cross,
  percentage,
} from './action';
import './calculator.css'

const Calculator = ({
  currentValue,
  previousValue,
  operation,
  inputNumber,
  inputDecimal,
  clear,
  add,
  subtract,
  multiply,
  divide,
  equals,
  cross,
  percentage,
}) => {
  const handleNumberClick = number => () => inputNumber(number);

  const handleDecimalClick = () => inputDecimal();

  const handleClearClick = () => clear();

  const handleAddClick = () => add();

  const handleSubtractClick = () => subtract();

  const handleMultiplyClick = () => multiply();

  const handleDivideClick = () => divide();

  const handleEqualsClick = () => equals();

  const handleTempCross = () => cross();

  const handlePercentage = () => percentage();
  return (
    <>
    <h1>Calculator Using React</h1>
    <div className='fullCalculator'>
    <div className='ans'>
      <input type="text" value={currentValue} readOnly />
      {/* <br /> */}
      </div>
      <div className='buttons'>
      <div className='buttondiv1'>
      <button onClick={handleClearClick}>AC</button>
      <button onClick={handleTempCross}>B</button>
      <button onClick={handlePercentage}>%</button>
      <button onClick={handleDivideClick}>/</button>
      </div>
      <div className='buttondiv2'>
      <button onClick={handleNumberClick(7)}>7</button>
      <button onClick={handleNumberClick(8)}>8</button>
      <button onClick={handleNumberClick(9)}>9</button>
      <button onClick={handleMultiplyClick}>*</button>
    </div>
    <div className='buttondiv3'>
      <button onClick={handleNumberClick(4)}>4</button>
      <button onClick={handleNumberClick(5)}>5</button>
      <button onClick={handleNumberClick(6)}>6</button>
      <button onClick={handleSubtractClick}>-</button>
      </div>
      <div className='buttondiv4'>
      <button onClick={handleNumberClick(1)}>1</button>
      <button onClick={handleNumberClick(2)}>2</button>
      <button onClick={handleNumberClick(3)}>3</button>
      <button onClick={handleAddClick}>+</button>
      </div>
      <div className='buttondiv5'>
      <button className='zero' onClick={handleNumberClick(0)}>0</button>
      <button onClick={handleDecimalClick}>.</button>
      <button onClick={handleEqualsClick}>=</button>
      </div>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = state => ({
  currentValue: state.currentValue,
  previousValue: state.previousValue,
  operation: state.operation,
});

const mapDispatchToProps = {
  inputNumber,
  inputDecimal,
  clear,
  add,
  subtract,
  multiply,
  divide,
  equals,
  cross,
  percentage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);


// import React, { Component } from 'react'

// export default class Calculator extends Component {
//     constructor() {
//         super();
//         this.state = {
//           number: 1,
//           text: "My Task"
//         };
//         // this.handleChange = this.handleChange.bind(this);
//       }
//     //   handleClick = () => {
//     //     this.setState(
//     //         prevState => {
//     //             return {
//     //                 number: prevState.number + 2
//     //             };
//     //         },
//     //         () => {
//     //             console.log(this.state.number);
//     //         }
//     //     );
  
//     //     this.setState(
//     //         prevState => {
//     //             return {
//     //                 number: prevState.number + 3
//     //             };
//     //         },
//     //         () => {
//     //             console.log(this.state.number);
//     //         }
//     //     );
//     // };
//       // Toggle the state when user clicks on the checkbox.
//       add=()=>{
//         this.setState((prevState)=>{
//             return{
//                 number:prevState.number+2
//             }
//         });
//       }
//       square=()=>{
//         this.setState((prevState)=>{
//             return{
//                 number:prevState.number*prevState.number
//             }
//         });
//       }
//       double=()=>{
//         this.setState((prevState)=>{
//             return{
//                 number:prevState.number+prevState.number
//             }
//         });
//       }
//       divide=()=>{
//         const {number}=this.state;
//         if(number===0){
// return;
//         }
//         this.setState((prevState)=>{
//             return{
//                 number:prevState.number/2
//             }
//         });
//       }
//       sub=()=>{
//         this.setState((prevState)=>{
//             return{
//                 number:prevState.number-2
//             }
//         });
//       }
//       render() {
//         const { number } = this.state;
//         return (
//           <div className="todo-item">
//             <div className="no">{number}</div>
//             <div className='button'>
//             <button type="button" onClick={this.add}>Add2</button>
//             <button type="button" onClick={this.square}>square</button>
//             <button type="button" onClick={this.double}>double</button>
//             <button type="button" onClick={this.divide}>divideby2</button>
//             <button type="button" onClick={this.sub}>subtract2</button>
//           </div>
//           </div>
//         );
//       }
// }
