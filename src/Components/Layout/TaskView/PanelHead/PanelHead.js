import React from 'react';
import classes from './PanelHead.css';

const panelHead = (props) => {
    var pendingPanelClass = [classes.PanelTab];
    var activePanelClass = [classes.PanelTab];
    if (props.activePanel === "pendingPanel") {
        pendingPanelClass.push(classes.Active);
        activePanelClass = [classes.PanelTab];
    }
    else {
        activePanelClass.push(classes.Active);
        pendingPanelClass = [classes.PanelTab];
    }
    return (
        <div className={classes.PanelHead}>
            <div className={pendingPanelClass.join(" ")} onClick={() => props.changePanelView('pendingPanel')}>Pending</div>
            <div className={activePanelClass.join(" ")} onClick={() => props.changePanelView('completedPanel')}>Completed</div>
        </div>
    )

}

export default panelHead;