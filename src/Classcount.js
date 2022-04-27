import React, { Component } from 'react'

export class Classcount extends Component {

    constructor(){
        super();
        this.state={
            counter:0
        }
    }

    increase(){
        this.setState({counter:this.state.counter+1});
    }

  render() {
    return (
        <div>
        <h1 style={{ color: 'lightgreen' }}>{this.state.counter}</h1>
        <button style={{backgroundColor:'lightgreen', border:'2px solid black'}} onClick={this.increase.bind(this)}>Click</button>
        </div>
    )
  }
}

export default Classcount