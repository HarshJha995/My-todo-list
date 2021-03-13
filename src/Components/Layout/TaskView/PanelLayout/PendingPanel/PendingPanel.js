import React from 'react';
import classes from './Panel.css';
import TaskItem from '../TaskItem/TaskItem';

const pendingPanel = (props) => {
    return (
        <div className={classes.PendingPanel}>
            <ul>
                {props.taskItems.map(taskItem => {
                    return <li key={taskItem.taskId}><TaskItem task={taskItem} deleteTask={props.deleteTask} enableEdit={props.enableEdit} disableEdit={props.disableEdit} taskCompleted={props.taskCompleted} panelType={props.panelType} /></li>
                })}
            </ul>
        </div>
    )
}

export default pendingPanel;