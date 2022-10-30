import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
          number: 0,
          text: "My Task"
        };
        // this.handleChange = this.handleChange.bind(this);
      }
    
      // Toggle the state when user clicks on the checkbox.
      add=()=>{
        this.setState((prevState)=>{
            return{
                number:prevState.number+2
            }
        });
      }
      square=()=>{
        this.setState((prevState)=>{
            return{
                number:prevState.number*prevState.number
            }
        });
      }
      double=()=>{
        this.setState((prevState)=>{
            return{
                number:prevState.number+prevState.number
            }
        });
      }
      divide=()=>{
        const {number}=this.state;
        if(number===0){
return;
        }
        this.setState((prevState)=>{
            return{
                number:prevState.number/2
            }
        });
      }
      
      render() {
        const { number } = this.state;
        return (
          <div className="todo-item">
            <div className="no">{number}</div>
            <div className='button'>
            <button type="button" onClick={this.add}>Add2</button>
            <button type="button" onClick={this.square}>square</button>
            <button type="button">double</button>
            <button type="button">divideby2</button>
            <button type="button">subtract2</button>
          </div>
          </div>
        );
      }
}
