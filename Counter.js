import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // console me print krane ke liye
        // this.state.count = this.state.count + 1
        // console.log(this.state.count);

        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count);

        this.setState(prevstate => ({
            count: prevstate.count + 1
        }))
        console.log(this.state.count);

    }
    incrementfive() {``
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementfive()}>increment</button>
            </div>
        )
    }
}


export default Counter