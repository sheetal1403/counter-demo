import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component{
    state = {
        counter: 0
    }

    onClickHandler = () => {
        this.setState((prevState) => ({
                counter: prevState.counter + 1
            })
        )}
    

    render(){
        return (
            <div>
                <p>{this.state.counter}</p>
                <Child click={this.onClickHandler}/>
            </div>
        )
    }
}

export default Parent