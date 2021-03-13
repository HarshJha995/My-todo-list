import React, { Component } from 'react';
import AddControl from '../Layout/AddControl/AddControl';
import PanelHead from './TaskView/PanelHead/PanelHead';
import PendingPanel from '../Layout/TaskView/PanelLayout/PendingPanel/PendingPanel';
import CompletedPanel from '../Layout/TaskView/PanelLayout/CompletedPanel/CompletedPanel';
import Aux from '../../HOC/Auxiliary';   //Aux as a HOC allows us to group multiple elements inside a section without having to create unnecessay divs

class Layout extends Component {
    state = {
        taskItems: [], //list of pending tasks
        completedTasks: [], //list of completed tasks
        activePanel: "pendingPanel"
    }

    addTaskHandler = (task) => {
        var tempTaskArr = [...this.state.taskItems];    //creating a clone of state arr so as to not mutate it directly
        tempTaskArr.push({
            taskId: Math.floor(Math.random() * (999 - 100 + 1) + 100),      //creating a random unique 3 digit ID
            taskValue: task
        })
        this.setState({ taskItems: [...tempTaskArr] })
    }

    deleteTaskHandler = (taskToDelete) => {
        var tempTaskArr = [...this.state.taskItems];
        var indexToDelete = tempTaskArr.map(task => task.taskId).indexOf(taskToDelete.taskId);  //finding the index of the task from the task list array
        tempTaskArr.splice(indexToDelete, 1);
        this.setState({ taskItems: tempTaskArr })
    }

    enableEditHandler = (taskToEnable) => {
        var tempTaskArr = [...this.state.taskItems];
        var indexToEdit = tempTaskArr.map(task => task.taskId).indexOf(taskToEnable.taskId);
        tempTaskArr[indexToEdit]['enableEdit'] = true;
        this.setState({ taskItems: [...tempTaskArr] })
    }

    disableEditHandler = (editedTaskVal, taskId) => {
        var tempTaskArr = [...this.state.taskItems];
        var indexToEdit = tempTaskArr.map(task => task.taskId).indexOf(taskId);
        tempTaskArr[indexToEdit].taskValue = editedTaskVal;
        delete tempTaskArr[indexToEdit].enableEdit;
        this.setState({ taskItems: tempTaskArr });

    }

    taskCompletedHandler = (completedTask) => {
        var tempTaskArr = [...this.state.taskItems];
        var indexToEdit = tempTaskArr.map(task => task.taskId).indexOf(completedTask.taskId);
        tempTaskArr[indexToEdit]['completed'] = true;    //setting a completed property which will be used to style the task item
        this.setState({ taskItems: tempTaskArr });
        var tempCompletedArr = [...this.state.completedTasks];
        tempCompletedArr.push(completedTask);
        this.setState({ completedTasks: tempCompletedArr })
        setTimeout(() => {
            this.deleteTaskHandler(completedTask)   //removing the task after a delay, once the scratch animation is finished
        }, 2000)
    }

    changePanelView = (panelType) => {
        this.setState({ activePanel: panelType })
    }

    render() {
        const blankText = <p style={{ textAlign: "center", fontSize: "24px" }}>Nothing to do! Add a task.</p>
        var activePanel = {};
        if (this.state.activePanel === "pendingPanel") {
            activePanel = <PendingPanel taskItems={this.state.taskItems} deleteTask={this.deleteTaskHandler} enableEdit={this.enableEditHandler} disableEdit={this.disableEditHandler} taskCompleted={this.taskCompletedHandler} panelType={this.state.activePanel} />
        }
        else {
            activePanel = <CompletedPanel taskItems={this.state.completedTasks} panelType={this.state.activePanel} />
        }

        return (
            <div>
                <AddControl addTask={this.addTaskHandler} />
                {
                    <Aux>
                        {this.state.taskItems.length ? null : blankText}
                        <PanelHead changePanelView={this.changePanelView} activePanel={this.state.activePanel} />
                        {activePanel}
                    </Aux>
                }

            </div>
        )
    }
}

export default Layout;