import React, { Component } from 'react';
import classes from './AddControl.css';

class AddControl extends Component {
    state = {
        taskValue: ""
    }

    updateValue = (event) => {
        this.setState({ taskValue: event.target.value })
    }

    sendTaskHandler = () => {
        if (this.state.taskValue) {
            this.props.addTask(this.state.taskValue);
            this.setState({ taskValue: "" })
        }
    }
    render() {
        return (
            <div className={classes.AddControl}>
                <input type="text" placeholder="I need to..." className={classes.Input} value={this.state.taskValue} onChange={this.updateValue} />
                <button onClick={this.sendTaskHandler} className={classes.Button}>+</button>
            </div >
        )
    }
}

export default AddControl;