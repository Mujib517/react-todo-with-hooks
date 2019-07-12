import React from 'react';
import './todo.css';

const CompletedTask = ({task, onUpdate}) => {
    return <div className="list-group-item">
        <span className="pull-left" style={{textDecoration: 'line-through'}}>
            {task.name}
        </span>
        <button className="pull-right btn-danger btn btn-sm btn-update"
                onClick={() => onUpdate(task)}>
            <i className="fa fa-times"/>
        </button>
    </div>;
};

const InCompleteTask = ({task, onUpdate}) => {
    return <div className="list-group-item">
        <span className="pull-left">
            {task.name}
        </span>
        <button className="pull-right btn-success btn btn-sm btn-update"
                onClick={() => onUpdate(task)}>
            <i className="fa fa-check"/>
        </button>
    </div>;
};

export default (props) => {

    return props.task.isCompleted ?
        <CompletedTask {...props}/> :
        <InCompleteTask {...props}/>
}