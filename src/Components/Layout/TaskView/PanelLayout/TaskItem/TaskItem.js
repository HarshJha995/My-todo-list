import React, { Component } from 'react';
import classes from './TaskItem.css';

class TaskItem extends Component {
    state = {
        taskItemValue: this.props.task.taskValue.slice(0)  //creating a clone of the prop as we can't directly mutate it
    }

    editTask = (event) => {
        var temp = event.target.value;
        this.setState({ taskItemValue: temp })
    }

    render() {
        var classList = [classes.TaskRow];
        if (this.props.task.completed)
            classList.push(classes.Strike)  //assigning strike animation class to the task which is completed

        return (
            <span className={classList.join(" ")}>
                {
                    this.props.panelType === "pendingPanel" ?
                        <input type="checkbox" id={this.props.task.taskId} className={classes.Checkbox} onClick={(e) => this.props.task.completed ? e.preventDefault() : this.props.taskCompleted(this.props.task)} /> : null
                }

                {
                    this.props.task.enableEdit ? <input className={classes.TaskItem} value={this.state.taskItemValue} onChange={this.editTask} onBlur={() => this.props.disableEdit(this.state.taskItemValue, this.props.task.taskId)}></input>
                        : <label htmlFor={this.props.task.taskId} className={classes.TaskItem}><p className={classes.TaskItem}>{this.props.task.taskValue}</p></label>
                }

                {
                    this.props.panelType === "pendingPanel" ?
                        <button className={classes.Button} onClick={() => this.props.task.completed ? null : this.props.enableEdit(this.props.task)}><i className="fas fa-edit"></i></button> : null            //we don't need this button in case of completed task pane
                }
                {
                    this.props.panelType === "pendingPanel" ?
                        <button className={classes.Button} onClick={() => this.props.task.completed ? null : this.props.deleteTask(this.props.task)}><i className="fas fa-trash-alt"></i></button> : null        //we don't need this button in case of completed task pane
                }

            </span>
        )
    }

}

export default TaskItem;