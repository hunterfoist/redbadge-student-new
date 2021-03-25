import React, { Component } from 'react'

export default class StateExample extends Component {
constructor (props){
    super(props);
    this.state = {currentTemp: "78", location: "Indiana"}
//     this.handleClick = this.handleClick.bind(this)
}

// handleClick(){
//     this.setState({currentTemp: "48"}) 
// }

handleClick = () => {
    this.setState({currentTemp: '25'});
}
    render() {
    return <div>Hello! The current tempurature is {this.state.currentTemp} - in {this.state.location}.
    
    <button onClick={this.handleClick}>Click me to change tempurature</button>
    </div>
}
}