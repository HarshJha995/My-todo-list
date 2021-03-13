import React from 'react';
import classes from '../PendingPanel/Panel.css';
import TaskItem from '../TaskItem/TaskItem';

const completedPanel = (props) => {
    return (
        <div className={classes.PendingPanel}>
            <ul>
                {props.taskItems.map(taskItem => {
                    return <li key={taskItem.taskId}><TaskItem task={taskItem} panelType={props.panelType} /></li>
                })}
            </ul>
        </div>
    )
}

export default completedPanel;